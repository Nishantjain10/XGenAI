<script lang="ts">
  import { fade, fly } from 'svelte/transition';

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

<section id="how-it-works" class="relative py-32 overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16" in:fade={{ duration: 300, delay: 200 }}>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
        How It Works
      </h2>
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">
        Get started with XGenAI in four simple steps
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      {#each steps as step, i}
        <div 
          class="flex items-start gap-8 mb-16 last:mb-0 relative"
          in:fly={{ x: i % 2 === 0 ? -20 : 20, duration: 600, delay: 300 + (i * 100) }}
        >
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center text-xl font-bold text-primary-400 border border-primary-500/30">
            {step.number}
          </div>
          <div class="flex-grow">
            <h3 class="text-2xl font-semibold mb-3 text-white">
              {step.title}
            </h3>
            <p class="text-gray-400 leading-relaxed">
              {step.description}
            </p>
          </div>
          {#if i < steps.length - 1}
            <div class="absolute left-6 top-14 h-24 w-px bg-gradient-to-b from-primary-500/30 to-transparent" />
          {/if}
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
    <div class="absolute left-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
  </div>
</section> 