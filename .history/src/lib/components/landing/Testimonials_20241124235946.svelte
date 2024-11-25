<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  const testimonials = [
    {
      quote: "XGenAI has transformed how I engage with my followers. The AI-generated responses are incredibly natural and contextually aware.",
      author: "Sarah Johnson",
      title: "Social Media Influencer",
      initial: "S"
    },
    {
      quote: "The speed and accuracy of XGenAI's responses have helped me maintain an active presence on X without compromising quality.",
      author: "Mike Chen",
      title: "Startup Founder",
      initial: "M"
    },
    {
      quote: "As a busy entrepreneur, XGenAI saves me hours every day. It's like having a social media expert by my side 24/7.",
      author: "Emily Rodriguez",
      title: "E-commerce Business Owner",
      initial: "E"
    }
  ];
</script>

<section class="relative py-32 overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16" in:fade={{ duration: 300, delay: 200 }}>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
        What Our Users Say
      </h2>
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">
        Join thousands of satisfied users who've transformed their X engagement
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each testimonials as testimonial, i}
        <div 
          class="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
          in:fly={{ y: 20, duration: 600, delay: 300 + (i * 100) }}
        >
          <div class="relative mb-6">
            <svg class="absolute -top-2 -left-2 h-8 w-8 text-primary-500/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="text-gray-300 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 font-semibold">
              {testimonial.initial}
            </div>
            <div>
              <p class="font-semibold text-white">{testimonial.author}</p>
              <p class="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          </div>
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