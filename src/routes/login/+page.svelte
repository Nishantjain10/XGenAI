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
      <div class="space-y-4 mb-12">
        <h2 
          class="text-4xl lg:text-5xl font-bold text-white text-center lg:text-left tracking-tight"
          in:fly={{ y: -20, duration: 800 }}
        >
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Supercharge
          </span>
          <br />
          Your X Engagement
        </h2>
        <p class="text-lg text-white/60 text-center lg:text-left">
          Experience the power of AI-driven conversations
        </p>
      </div>
      
      <div class="space-y-4 sm:space-y-6">
        {#each features as feature, i}
          <div 
            class="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-[#0C1322]/50 backdrop-blur-sm border border-blue-500/10 
                   hover:border-blue-500/20 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5"
            in:fly={{ x: -20, duration: 500, delay: 750 + (i * 150) }}
          >
            <!-- Reduced gradient opacity -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl bg-gradient-to-r from-blue-500/5 via-transparent to-transparent animate-gradient"></div>
            
            <!-- Icon with animation -->
            <div class="text-blue-400 flex-shrink-0 group-hover:animate-bounce-subtle relative z-10">
              <svelte:component this={feature.icon} size={24} />
            </div>

            <div class="relative z-10">
              <h3 class="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p class="text-sm sm:text-base text-white/60 group-hover:text-white/70 transition-colors duration-300">
                {feature.description}
              </p>
            </div>

            <!-- Reduced glow effect -->
            <div class="absolute -inset-px opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl bg-blue-500/10 blur-sm -z-10"></div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Right side - Login form -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative order-1 lg:order-2" in:fade={{ duration: 300, delay: 150 }}>
    <div class="w-full max-w-md">
      <div class="bg-[#0C1322] backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-500/10">
        <div class="text-center mb-6 sm:mb-8" in:fly={{ y: 20, duration: 300, delay: 300 }}>
          <div class="flex justify-center mb-4">
            <h1 class="text-2xl font-bold text-blue-400">XGenAI</h1>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p class="text-white/60">
            Generate thoughtful AI replies for your X posts
          </p>
        </div>
        
        <button 
          class="w-full bg-white hover:bg-white/90 text-[#0B1121] font-medium py-2.5 sm:py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          on:click={handleTwitterLogin}
          disabled={loading}
          in:fly={{ y: 20, duration: 300, delay: 450 }}
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          {loading ? 'Connecting...' : 'Continue with X'}
        </button>

        <div class="mt-6 sm:mt-8 text-center" in:fly={{ y: 20, duration: 300, delay: 600 }}>
          <a 
            href="/" 
            class="text-blue-400/80 hover:text-blue-400 text-sm transition-colors duration-200"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>

    <!-- Background gradient effects -->
    <div class="absolute inset-0 -z-10 opacity-50 lg:opacity-100">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a0a,transparent_70%)] blur-3xl" />
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    background-color: #111827;
  }

  @media (max-width: 1023px) {
    :global(body) {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  /* Add smooth transitions for all interactive elements */
  .group {
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  /* Hover effect for feature cards */
  .group:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px -2px rgba(66, 153, 225, 0.1);
  }

  /* Add Inter font usage */
  :global(h1, h2, h3, p, span, div) {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
</style> 