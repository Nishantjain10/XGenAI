<script>
  import Header from '$lib/components/landing/Header.svelte';
  import Hero from '$lib/components/landing/Hero.svelte';
  import Features from '$lib/components/landing/Features.svelte';
  import HowItWorks from '$lib/components/landing/HowItWorks.svelte';
  import Testimonials from '$lib/components/landing/Testimonials.svelte';
  import Pricing from '$lib/components/landing/Pricing.svelte';
  import Cta from '$lib/components/landing/Cta.svelte';
  import Footer from '$lib/components/landing/Footer.svelte';
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
  <Header />
  <main>
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <Pricing />
    <Cta />
  </main>
  <Footer />
</div> 