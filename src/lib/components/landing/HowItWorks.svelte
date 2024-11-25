<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  
  onMount(() => {
    visible = true;
  });

  const steps = [
    {
      number: '01',
      title: 'Connect Your X Account',
      description: 'Securely link your X profile with just a few clicks using OAuth2.'
    },
    {
      number: '02',
      title: 'Select a Conversation',
      description: 'Choose any X post or thread you want to respond to from your mentions.'
    },
    {
      number: '03',
      title: 'Generate AI Replies',
      description: 'Get contextually relevant, engaging responses powered by advanced AI.'
    },
    {
      number: '04',
      title: 'Review and Post',
      description: 'Edit the generated replies if needed and post directly to X.'
    }
  ];
</script>

<section id="how-it-works" class="relative bg-[#0B1121] py-24 overflow-hidden">
  <div class="container mx-auto px-4">
    {#if visible}
      <div 
        class="max-w-3xl mx-auto text-center mb-16"
        in:fly={{ y: 20, duration: 800, delay: 200 }}
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Get started with XGenAI in four simple steps</h2>
      </div>

      <div class="max-w-3xl mx-auto">
        {#each steps as step, i}
          <div 
            class="flex gap-8 mb-16 last:mb-0 relative group"
            in:fly={{ y: 20, duration: 800, delay: 400 + (i * 200) }}
          >
            <!-- Number Circle -->
            <div class="relative shrink-0">
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg font-medium text-white/60 relative bg-[#0B1121] group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-300">
                {step.number}
              </div>
              {#if step.number !== '04'}
                <div class="absolute top-12 left-1/2 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-white/10 to-transparent -translate-x-1/2" />
              {/if}
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>
              <p class="text-white/60 text-lg group-hover:text-white/70 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
</section>

<style>
  .group {
    transition: all 0.3s ease-in-out;
  }
</style> 