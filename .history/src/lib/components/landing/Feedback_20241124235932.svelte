<script lang="ts">
  import { Star } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  
  onMount(() => {
    visible = true;
  });

  const feedbacks = [
    {
      name: 'Alex Thompson',
      role: 'Social Media Manager',
      comment: 'XGenAI has transformed how I manage social media interactions. The AI responses are incredibly natural.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Content Creator',
      comment: 'The personality matching feature is spot-on. It feels like the responses are coming directly from me.',
      rating: 5
    },
    {
      name: 'Michael Roberts',
      role: 'Digital Marketer',
      comment: 'Impressive technology that saves me hours every day. The contextual understanding is remarkable.',
      rating: 5
    }
  ];
</script>

<section class="relative bg-[#0C1322] py-24 overflow-hidden">
  <div class="container mx-auto px-4">
    {#if visible}
      <div 
        class="max-w-3xl mx-auto text-center mb-16"
        in:fly={{ y: 20, duration: 800, delay: 200 }}
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">What Users Say</h2>
        <p class="text-white/60">Join thousands of satisfied users worldwide</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {#each feedbacks as feedback, i}
          <div 
            class="group"
            in:fly={{ y: 20, duration: 800, delay: 400 + (i * 200) }}
          >
            <div class="bg-[#0B1121] border border-blue-500/10 rounded-xl p-8 hover:border-blue-500/20 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-blue-500/5">
              <!-- Rating with animation -->
              <div class="flex gap-1 mb-4">
                {#each Array(feedback.rating) as _}
                  <Star class="w-5 h-5 fill-blue-400 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                {/each}
              </div>
              
              <!-- Comment with hover effect -->
              <p class="text-white/80 mb-6 transition-colors duration-300 group-hover:text-white">
                "{feedback.comment}"
              </p>
              
              <!-- User info with subtle animation -->
              <div class="relative">
                <div class="absolute -inset-2 bg-blue-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div class="relative">
                  <div class="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                    {feedback.name}
                  </div>
                  <div class="text-white/60 text-sm">{feedback.role}</div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Animated background elements -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e3a8a0a,transparent_70%)] animate-pulse -z-10" />
  <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-pulse-slow -z-10" />
  <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-pulse-slow delay-1000 -z-10" />
</section>

<style>
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.7; }
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }

  /* Smooth transitions for all interactive elements */
  .group {
    transition: all 0.3s ease-in-out;
  }
</style> 