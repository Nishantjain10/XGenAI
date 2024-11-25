<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '../shared/Button.svelte';
  import { Sparkles } from 'lucide-svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 py-32 sm:py-40">
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-4xl mx-auto text-center" in:fade={{ duration: 300, delay: 200 }}>
      <!-- Floating badge -->
      <div 
        class="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full mb-8 text-primary-400"
        in:fly={{ y: 20, duration: 800, delay: 200 }}
      >
        <Sparkles class="w-4 h-4" />
        <span class="text-sm font-medium">Powered by Advanced AI</span>
      </div>

      <!-- Main heading with animated gradient -->
      <h1 
        class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
        in:fly={{ y: 20, duration: 800, delay: 300 }}
      >
        <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 animate-gradient">
          Generate Thoughtful AI Replies
        </span>
        <br />
        <span class="text-white inline-block mt-2">for Your X Posts</span>
      </h1>
      
      <!-- Description with animated typing effect -->
      <p 
        class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed relative"
        in:fly={{ y: 20, duration: 800, delay: 400 }}
      >
        Engage your audience with intelligent, context-aware responses powered by cutting-edge AI technology.
        <span class="absolute -right-4 top-0 animate-blink">|</span>
      </p>
      
      <!-- CTA buttons with hover effects -->
      <div 
        class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        in:fly={{ y: 20, duration: 800, delay: 500 }}
      >
        <Button 
          href="/login" 
          size="lg" 
          variant="primary" 
          class="w-full sm:w-auto group relative overflow-hidden"
        >
          <span class="relative z-10">Get Started Free</span>
          <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transform transition-transform group-hover:scale-110 duration-500" />
        </Button>
        <a 
          href="#features" 
          class="group flex items-center gap-2 text-lg font-semibold text-white hover:text-primary-400 transition-all duration-300"
        >
          Learn more 
          <svg 
            class="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <!-- Stats section -->
      <div 
        class="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        in:fly={{ y: 20, duration: 800, delay: 600 }}
      >
        {#each [
          { value: '10K+', label: 'Active Users' },
          { value: '1M+', label: 'AI Replies Generated' },
          { value: '98%', label: 'Satisfaction Rate' }
        ] as stat}
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div class="text-gray-400">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Enhanced background effects -->
  <div class="absolute inset-0 -z-10">
    <!-- Animated gradient orbs -->
    <div class="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-500/30 to-primary-700/30 blur-3xl animate-pulse" />
    <div class="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-l from-primary-500/30 to-primary-700/30 blur-3xl animate-pulse delay-1000" />
    
    <!-- Animated grid pattern -->
    <div 
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid"
    />
    
    <!-- Radial gradient overlay -->
    <div class="absolute inset-0 bg-gradient-radial from-transparent via-gray-900 to-gray-900" />
  </div>
</section>

<style>
  .animate-gradient {
    background-size: 200% auto;
    animation: gradient 8s linear infinite;
  }

  .animate-blink {
    animation: blink 1s step-end infinite;
  }

  .animate-grid {
    animation: grid 20s linear infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes grid {
    0% { transform: translateY(0); }
    100% { transform: translateY(24px); }
  }

  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
  }
</style> 