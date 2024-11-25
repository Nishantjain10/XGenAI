<script>
  import Header from '$lib/components/shared/Header.svelte';
  import Hero from '$lib/components/landing/Hero.svelte';
  import Features from '$lib/components/landing/Features.svelte';
  import HowItWorks from '$lib/components/landing/HowItWorks.svelte';
  import Pricing from '$lib/components/landing/Pricing.svelte';
  import Feedback from '$lib/components/landing/Feedback.svelte';
  import Footer from '$lib/components/landing/Footer.svelte';
</script>

<Header />
<main>
  <!-- Hero: Darkest navy -->
  <Hero />
  
  <!-- Features: Slightly lighter with blue tint -->
  <Features />
  
  <!-- How It Works: Dark navy with slight purple tint -->
  <HowItWorks />
  
  <!-- Feedback: Deep blue -->
  <Feedback />
  
  <!-- Pricing: Return to darkest navy -->
  <Pricing />
</main>
<Footer /> 