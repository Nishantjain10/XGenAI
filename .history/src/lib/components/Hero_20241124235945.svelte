<script>
  import { fade } from 'svelte/transition';
</script>

<section class="relative overflow-hidden bg-gray-900 py-32 sm:py-40">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center" in:fade={{ duration: 500, delay: 200 }}>
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
        Generate Thoughtful AI Replies for Your X Posts
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Engage your audience with intelligent, context-aware responses powered by cutting-edge AI technology.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/login"
          class="rounded-full bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 transition-all duration-200"
        >
          Get Started Free
        </a>
        <a href="#features" class="text-base font-semibold leading-6 text-white hover:text-primary-400 transition-colors">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
  
  <!-- Background effects -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-900/40 to-primary-700/40 blur-3xl" />
    <div class="absolute left-[50%] bottom-0 h-[1000px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-primary-900/40 to-primary-700/40 blur-3xl" />
  </div>
</section> 