<script lang="ts">
  import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-svelte';
  import Logo from '../shared/Logo.svelte';
  import { fade } from 'svelte/transition';

  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/xgenai',
      label: 'Follow us on Twitter'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/xgenai',
      label: 'Follow us on Facebook'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/xgenai',
      label: 'Follow us on Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/xgenai',
      label: 'Follow us on LinkedIn'
    }
  ];

  const links = {
    product: [
      { href: '#features', label: 'Features' },
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#pricing', label: 'Pricing' },
      { href: '/docs', label: 'Documentation' }
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' }
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' }
    ]
  };
</script>

<footer class="relative overflow-hidden bg-gray-900/80 backdrop-blur-md py-16 px-4">
  <div class="container mx-auto" in:fade={{ duration: 300, delay: 200 }}>
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
      <!-- Brand Section -->
      <div class="lg:col-span-2">
        <Logo size="lg" />
        <p class="text-gray-400 mt-4 max-w-md">
          Empowering social media engagement with cutting-edge AI technology. Generate thoughtful, contextual responses that keep your audience engaged.
        </p>
        <div class="flex gap-4 mt-6">
          {#each socialLinks as { icon: Icon, href, label }}
            <a 
              {href}
              class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon class="w-5 h-5" />
            </a>
          {/each}
        </div>
      </div>

      <!-- Links Sections -->
      <div>
        <h3 class="text-white font-semibold mb-4">Product</h3>
        <ul class="space-y-3">
          {#each links.product as link}
            <li>
              <a href={link.href} class="text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4">Company</h3>
        <ul class="space-y-3">
          {#each links.company as link}
            <li>
              <a href={link.href} class="text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4">Legal</h3>
        <ul class="space-y-3">
          {#each links.legal as link}
            <li>
              <a href={link.href} class="text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="pt-8 border-t border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          &copy; {currentYear} XGenAI. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="/sitemap" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
            Sitemap
          </a>
          <a href="/accessibility" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
            Accessibility
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Background Effects -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
  </div>
</footer>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
  }
</style> 