<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '../shared/Button.svelte';
</script>

<section class="relative py-32 overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div 
      class="max-w-4xl mx-auto text-center bg-gray-800/30 backdrop-blur-sm p-12 rounded-3xl border border-gray-700/50"
      in:fade={{ duration: 300, delay: 200 }}
    >
      <h2 
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
        in:fly={{ y: 20, duration: 600, delay: 300 }}
      >
        Ready to Transform Your X Engagement?
      </h2>
      
      <p 
        class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        in:fly={{ y: 20, duration: 600, delay: 400 }}
      >
        Join thousands of satisfied users and experience the power of AI-driven social media interactions.
      </p>
      
      <div 
        class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        in:fly={{ y: 20, duration: 600, delay: 500 }}
      >
        <Button href="/login" size="lg" variant="primary">
          Start Your Free Trial
        </Button>
        <Button href="#pricing" size="lg" variant="outline">
          View Pricing
        </Button>
      </div>
    </div>
  </div>

  <!-- Background Effects -->
  <div class="absolute inset-0 -z-10">
    <!-- Grid Pattern -->
    <div 
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    
    <!-- Gradient Orbs -->
    <div class="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
    <div class="absolute right-1/4 top-1/2 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
  </div>
</section> 