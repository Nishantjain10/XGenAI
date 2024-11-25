<script lang="ts">
  import { Shield, Zap, Users, Sparkles } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  
  onMount(() => {
    visible = true;
  });

  const features = [
    {
      icon: Shield,
      title: 'Smart Context Understanding',
      description: 'Our AI analyzes conversation context for relevant responses'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Replies',
      description: 'Generate engaging responses in seconds'
    },
    {
      icon: Users,
      title: 'Personality Matching',
      description: 'Maintains your unique voice and style'
    },
    {
      icon: Sparkles,
      title: 'Advanced AI Models',
      description: 'Powered by cutting-edge language models'
    }
  ];
</script>

<section id="features" class="relative bg-[#0B1121] py-24 overflow-hidden">
  <div class="container mx-auto px-4">
    {#if visible}
      <div 
        class="max-w-3xl mx-auto text-center mb-16"
        in:fly={{ y: 20, duration: 800, delay: 200 }}
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Powerful Features</h2>
        <p class="text-white/60">Advanced AI capabilities to enhance your X presence</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {#each features as feature, i}
          <div 
            class="relative group"
            in:fly={{ y: 20, duration: 800, delay: 400 + (i * 200) }}
          >
            <!-- Hover gradient -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            
            <!-- Card content -->
            <div class="relative bg-blue-500/5 border border-blue-500/10 rounded-xl p-8 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div class="relative">
                <div class="absolute -inset-1 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <svelte:component 
                  this={feature.icon} 
                  class="w-8 h-8 text-blue-400 relative [animation:iconFloat_3s_ease-in-out_infinite]"
                />
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-3 mt-4">{feature.title}</h3>
              <p class="text-white/60">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Decorative elements -->
  <div class="absolute top-1/2 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10" />
  <div class="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10" />
</section>

<style>
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* Remove the unused .animate-icon class */
  .group {
    transition: all 0.3s ease-in-out;
  }
</style> 