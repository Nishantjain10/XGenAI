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
          <!-- Rest of the feature card content remains the same -->
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(h1, h2, h3, p, span, div) {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
</style> 