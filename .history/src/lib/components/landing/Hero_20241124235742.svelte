<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '../shared/Button.svelte';
  import { Sparkles } from 'lucide-svelte';
</script>

<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B1121] font-inter py-20 sm:py-32">
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-5xl mx-auto text-center">
      <!-- Badge -->
      <div 
        in:fly={{ y: 20, duration: 800, delay: 200 }}
        class="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 px-4 py-2 rounded-full mb-12 text-blue-400/80 animate-float"
      >
        <Sparkles class="w-4 h-4" />
        <span class="text-sm font-medium">Powered by Advanced AI</span>
      </div>

      <!-- Heading -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
        <span 
          in:fly={{ y: 20, duration: 800, delay: 400 }}
          class="text-white/80 block"
        >
          Generate Thoughtful
        </span>
        <span 
          in:fly={{ y: 20, duration: 800, delay: 600 }}
          class="text-white mt-2 block"
        >
          AI Replies for X
        </span>
      </h1>
      
      <!-- Description -->
      <p 
        in:fly={{ y: 20, duration: 800, delay: 800 }}
        class="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Engage your audience with intelligent, context-aware responses powered by cutting-edge AI technology.
      </p>
      
      <!-- CTA Buttons -->
      <div 
        in:fly={{ y: 20, duration: 800, delay: 1000 }}
        class="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a 
          href="/login" 
          class="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
        >
          Get Started Free
        </a>
        <a 
          href="#features" 
          class="group flex items-center gap-2 text-lg font-medium text-white/80 hover:text-blue-400 transition-colors"
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

      <!-- Stats -->
      <div 
        in:fly={{ y: 20, duration: 800, delay: 1200 }}
        class="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
      >
        {#each [
          { value: '10K+', label: 'Active Users' },
          { value: '1M+', label: 'AI Replies Generated' },
          { value: '98%', label: 'Satisfaction Rate' }
        ] as stat}
          <div class="bg-blue-500/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:scale-105">
            <div class="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div class="text-white/60">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Background -->
  <div class="absolute inset-0 -z-10">
    <!-- Grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:64px_64px] animate-grid" />
    
    <!-- Subtle gradient overlays -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1121] to-[#0B1121]" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a0a,transparent_70%)]" />
  </div>
</section>

<style>
  :global(.font-inter) {
    font-family: 'Inter', sans-serif;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-grid {
    animation: grid 20s linear infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes grid {
    0% { transform: translateY(0); }
    100% { transform: translateY(64px); }
  }
</style> 