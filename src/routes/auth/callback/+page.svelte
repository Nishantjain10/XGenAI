<script lang="ts">
  import { twitterClient } from '$lib/twitter';
  import { createDocument, findUserByTwitterId, updateDocument, createAnonymousSession, getCurrentSession } from '$lib/appwrite';
  import { goto } from '$app/navigation';
  import { twitterUser } from '$lib/stores/twitter';
  import { onMount } from 'svelte';

  let loading = true;
  let error = '';
  let message = 'Setting up your account...';

  onMount(async () => {
    try {
      // First check for existing session
      message = 'Checking session...';
      let session = await getCurrentSession();
      
      // Only create a new session if one doesn't exist
      if (!session) {
        message = 'Initializing session...';
        session = await createAnonymousSession();
        if (!session) {
          throw new Error('Failed to create session');
        }
      }

      // Get OAuth2 parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      if (!code || !state) {
        throw new Error('Missing required OAuth parameters');
      }

      message = 'Verifying Twitter credentials...';
      // Handle Twitter callback with OAuth2 parameters
      const { user: twitterUserData, accessToken, refreshToken } = 
        await twitterClient.handleCallback(code, state);

      // Check if user already exists
      message = 'Checking existing account...';
      const existingUser = await findUserByTwitterId(twitterUserData.username ?? '');

      if (existingUser) {
        // Update existing user
        message = 'Updating your account...';
        await updateDocument(existingUser.$id, {
          lastLogin: new Date().toISOString(),
          accessToken,
          refreshToken: refreshToken || undefined,
          name: twitterUserData.name ?? '',
        });
      } else {
        // Create new user
        message = 'Creating your account...';
        await createDocument({
          userId: twitterUserData.id,
          twitterId: twitterUserData.username ?? '',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          accessToken,
          refreshToken: refreshToken || undefined,
          name: twitterUserData.name ?? '',
          username: twitterUserData.username ?? ''
        });
      }

      // Set Twitter user in store
      twitterUser.set(twitterUserData);

      message = 'Redirecting to dashboard...';
      await goto('/dashboard');
    } catch (err) {
      error = err instanceof Error ? err.message : 'Authentication failed';
      console.error('Callback error:', err);
    } finally {
      loading = false;
    }
  });
</script>

{#if error}
  <div class="error-container">
    <p class="error">{error}</p>
    <p class="error-details">Something went wrong during authentication.</p>
    <a href="/login" class="back-button">Back to Login</a>
  </div>
{:else if loading}
  <div class="loading">
    <div class="spinner"></div>
    <p>{message}</p>
  </div>
{/if}

<style>
  .loading,
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .error {
    color: #ff4444;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .error-details {
    color: #666;
    max-width: 400px;
  }

  .back-button {
    display: inline-block;
    color: white;
    background-color: #1DA1F2;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    margin-top: 1rem;
    transition: background-color 0.2s;
  }

  .back-button:hover {
    background-color: #1a8cd8;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #1DA1F2;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style> 