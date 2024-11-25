<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { Menu, X } from 'lucide-svelte';
  import Logo from '../shared/Logo.svelte';
  import Button from '../shared/Button.svelte';

  let isMenuOpen = false;
  let isScrolled = false;

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 20;
    });
  }

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' }
  ];
</script>

<header 
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-gray-900/95' : 'bg-transparent'} backdrop-blur-sm"
>
  <nav class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <Logo size="md" />
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        {#each navItems as item}
          <a 
            href={item.href} 
            class="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        {/each}
        <Button href="/login" variant="primary">
          Get Started
        </Button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-gray-300 hover:text-white p-2"
        on:click={() => isMenuOpen = !isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div 
        class="md:hidden pt-4 pb-6"
        transition:fly={{ y: -20, duration: 200 }}
      >
        <div class="flex flex-col gap-4">
          {#each navItems as item}
            <a 
              href={item.href} 
              class="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              on:click={() => isMenuOpen = false}
            >
              {item.label}
            </a>
          {/each}
          <Button href="/login" variant="primary" fullWidth>
            Get Started
          </Button>
        </div>
      </div>
    {/if}
  </nav>
</header>

<!-- Spacer to prevent content from hiding under fixed header -->
<div class="h-16"></div> 