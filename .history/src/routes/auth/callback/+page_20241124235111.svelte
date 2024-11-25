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

      // Rest of your code remains the same...
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  });
</script> 