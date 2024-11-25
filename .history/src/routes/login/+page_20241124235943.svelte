<script lang="ts">
  import { twitterClient } from '$lib/twitter';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Logo from '$lib/components/shared/Logo.svelte';
  import { fade, fly } from 'svelte/transition';
  import { Sparkles, Shield, Zap, Twitter } from 'lucide-svelte';

  let loading = false;
  let errorMessage = '';

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Replies',
      description: 'Generate contextually relevant responses in seconds'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant responses to keep your engagement high'
    }
  ];

  const handleTwitterLogin = async () => {
    try {
      loading = true;
      errorMessage = '';
      const authUrl = await twitterClient.generateAuthLink();
      if (authUrl) {
        window.location.href = authUrl;
      } else {
        throw new Error('Failed to generate auth URL');
      }
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : 'Failed to initialize Twitter login';
      console.error('Twitter auth error:', err);
    } finally {
      loading = false;
    }
  };
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col lg:flex-row">
  <!-- Left side - Features -->
  <div class="w-full lg:w-1/2 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
    <div class="w-full max-w-lg" in:fade={{ duration: 300, delay: 600 }}>
      <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent text-center lg:text-left">
        Supercharge Your X Engagement
      </h2>
      
      <div class="space-y-4 sm:space-y-6">
        {#each features as feature, i}
          <div 
            class="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-colors duration-300"
            in:fly={{ x: -20, duration: 300, delay: 750 + (i * 150) }}
          >
            <div class="text-primary-500 flex-shrink-0">
              <svelte:component this={feature.icon} size={24} />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-semibold text-white mb-1">{feature.title}</h3>
              <p class="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Right side - Login form -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative order-1 lg:order-2" in:fade={{ duration: 300, delay: 150 }}>
    <div class="w-full max-w-md">
      <div class="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700/50">
        <div class="text-center mb-6 sm:mb-8" in:fly={{ y: 20, duration: 300, delay: 300 }}>
          <div class="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <h1 class="text-xl sm:text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p class="text-sm sm:text-base text-gray-300">
            Generate thoughtful AI replies for your X posts
          </p>
        </div>
        
        <button 
          class="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-2.5 sm:py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          on:click={handleTwitterLogin}
          disabled={loading}
          in:fly={{ y: 20, duration: 300, delay: 450 }}
        >
          <Twitter class="w-4 h-4 sm:w-5 sm:h-5" />
          {loading ? 'Connecting...' : 'Continue with X'}
        </button>

        {#if errorMessage}
          <div class="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg" 
            in:fly={{ y: 20, duration: 300 }}>
            <p class="text-red-400 text-sm text-center">{errorMessage}</p>
          </div>
        {/if}

        <div class="mt-6 sm:mt-8 text-center" in:fly={{ y: 20, duration: 300, delay: 600 }}>
          <a 
            href="/" 
            class="text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>

    <!-- Background gradient effects -->
    <div class="absolute inset-0 -z-10 opacity-50 lg:opacity-100">
      <div class="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-3xl" />
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    background-color: #111827;
  }

  /* Add radial gradient background */
  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
  }

  @media (max-width: 1023px) {
    :global(body) {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
  }
</style> 