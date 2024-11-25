<script lang="ts">
  import { Menu, X } from 'lucide-svelte';
  let isMenuOpen = false;
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/80 backdrop-blur-lg border-b border-blue-500/10">
  <div class="container mx-auto px-4">
    <nav class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="text-xl font-bold text-white">
        XGenAI
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-white/60 hover:text-white transition-colors">Features</a>
        <a href="#how-it-works" class="text-white/60 hover:text-white transition-colors">How It Works</a>
        <a href="#pricing" class="text-white/60 hover:text-white transition-colors">Pricing</a>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden md:flex items-center gap-4">
        <a href="/login" class="text-white/80 hover:text-white transition-colors">Log in</a>
        <a href="/signup" class="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          Get Started
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-white/80 hover:text-white"
        on:click={() => isMenuOpen = !isMenuOpen}
      >
        {#if isMenuOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>
    </nav>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 border-t border-blue-500/10">
        <div class="flex flex-col gap-4">
          <a href="#features" class="text-white/60 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" class="text-white/60 hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" class="text-white/60 hover:text-white transition-colors">Pricing</a>
          <div class="flex flex-col gap-2 pt-4 border-t border-blue-500/10">
            <a href="/login" class="text-white/80 hover:text-white transition-colors">Log in</a>
            <a href="/signup" class="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-center">
              Get Started
            </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</header> 