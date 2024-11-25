<script lang="ts">
  import { rateLimit } from '$lib/stores/rateLimit';
  import { onMount } from 'svelte';
  // ... other imports remain the same

  let mentions: any[] = [];

  function loadCache(): boolean {
    const cached = localStorage.getItem('mentions-cache');
    if (cached) {
      mentions = JSON.parse(cached);
      return true;
    }
    return false;
  }

  let rateLimitInfo = {
    remaining: 0,
    limit: 0,
    reset: 0,
    resetDate: ''
  };

  onMount(async () => {
    try {
      const hasCachedData = loadCache();
      
      if (!$rateLimit.isLimited) {
        const response = await fetch('/api/twitter/mentions', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });

        // Log all headers for debugging
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        // Get rate limit info from headers
        rateLimitInfo = {
          remaining: parseInt(response.headers.get('x-rate-limit-remaining') || '0'),
          limit: parseInt(response.headers.get('x-rate-limit-limit') || '0'),
          reset: parseInt(response.headers.get('x-rate-limit-reset') || '0'),
          resetDate: new Date(parseInt(response.headers.get('x-rate-limit-reset') || '0') * 1000).toLocaleString()
        };

        console.log('Rate limit info:', rateLimitInfo);

        if (response.status === 429) {
          $rateLimit.isLimited = true;
          $rateLimit.reset = rateLimitInfo.reset;
          updateCountdown();
          
          if (!hasCachedData) {
            throw new Error('Rate limit exceeded');
          }
          return;
        }

        // ... rest of the code remains the same
      }
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load mentions';
      console.error('Error loading mentions:', e);
    } finally {
      loading = false;
    }
  });
</script>

<div class="mentions-list">
  <h3>Recent Mentions</h3>
  
  <!-- Add rate limit info display -->
  <div class="rate-limit-info">
    <p>API Calls Remaining: {rateLimitInfo.remaining}/{rateLimitInfo.limit}</p>
    <p>Reset at: {rateLimitInfo.resetDate}</p>
  </div>
  
  {#if $rateLimit.isLimited}
    <div class="rate-limit-warning">
      <p>Rate limit exceeded. Please wait {timeUntilReset} before trying again.</p>
      {#if mentions.length > 0}
        <p class="cached-notice">Showing cached data</p>
      {/if}
    </div>
  {/if}
  
  <!-- Rest of the template remains the same -->
</div>

<style>
  /* Previous styles remain the same */

  .rate-limit-info {
    background-color: #e8f5fe;
    border: 1px solid #1DA1F2;
    color: #1DA1F2;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .rate-limit-info p {
    margin: 0.25rem 0;
  }
</style> 