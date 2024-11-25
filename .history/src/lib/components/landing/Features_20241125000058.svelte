<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { MessageSquare, Zap, Shield, Sparkles } from 'lucide-svelte';

  const features = [
    {
      icon: MessageSquare,
      title: 'Contextual Replies',
      description: 'Our AI understands conversation context, generating relevant and engaging responses that feel natural.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get AI-powered replies in seconds, keeping your social media presence active and responsive.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your data is protected with state-of-the-art encryption and privacy measures.'
    },
    {
      icon: Sparkles,
      title: 'Personalized Tone',
      description: 'Customize the AI\'s writing style to match your brand voice and personality.'
    }
  ];
</script>

<section id="features" class="relative py-32 overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16" in:fade={{ duration: 300, delay: 200 }}>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
        Why Choose XGenAI?
      </h2>
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">
        Experience the future of social media engagement with our cutting-edge AI technology.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {#each features as feature, i}
        <div 
          class="group bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
          in:fly={{ y: 20, duration: 600, delay: 300 + (i * 100) }}
        >
          <div class="relative">
            <div class="absolute -inset-1 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <svelte:component 
              this={feature.icon} 
              class="w-8 h-8 text-blue-400 relative [animation:iconFloat_3s_ease-in-out_infinite]"
            />
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
            {feature.title}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Background Effects -->
  <div class="absolute inset-0 -z-10">
    <!-- Grid Pattern -->
    <div 
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    
    <!-- Gradient Orb -->
    <div class="absolute right-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
  </div>
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