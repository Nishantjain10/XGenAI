<div class="relative">
  <div class="absolute -inset-1 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
  <svelte:component 
    this={feature.icon} 
    class="w-8 h-8 text-blue-400 relative [animation:iconFloat_3s_ease-in-out_infinite]"
  />
</div>

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