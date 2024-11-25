<script lang="ts">
  import { Check } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  
  onMount(() => {
    visible = true;
  });
</script>

<section id="pricing" class="relative bg-[#0B1121] py-24 overflow-hidden">
  <div class="container mx-auto px-4">
    {#if visible}
      <div 
        class="max-w-3xl mx-auto text-center mb-16"
        in:fly={{ y: 20, duration: 800, delay: 200 }}
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Simple Pricing</h2>
        <p class="text-white/60">Choose the plan that works for you</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Starter -->
        <div 
          class="flex flex-col group h-full"
          in:fly={{ y: 20, duration: 800, delay: 400 }}
        >
          <div class="flex flex-col h-full bg-[#0B1121] border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:border-blue-500/20 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-blue-500/5">
            <div class="flex-1">
              <div class="mb-8">
                <h3 class="text-lg font-medium text-white/80 mb-4">Starter</h3>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Free</span>
                </div>
              </div>

              <ul class="space-y-4">
                {#each ['500 AI replies/month', 'Basic analytics', 'Standard support'] as feature}
                  <li class="flex items-center gap-3 text-white/60">
                    <Check class="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                    <span class="group-hover:text-white/70 transition-colors duration-300">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <div class="mt-8">
              <a href="/signup" class="block w-full py-3 px-6 rounded-full bg-white/5 text-white text-center font-medium hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <!-- Pro -->
        <div 
          class="flex flex-col group h-full"
          in:fly={{ y: 20, duration: 800, delay: 600 }}
        >
          <div class="flex flex-col h-full bg-[#0F172A] border border-blue-500/20 rounded-2xl p-8 transition-all duration-500 group-hover:border-blue-500/30 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-blue-500/10">
            <div class="flex-1">
              <div class="mb-8">
                <h3 class="text-lg font-medium text-white/80 mb-4">Pro</h3>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-bold text-white">$29</span>
                </div>
              </div>

              <ul class="space-y-4">
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Unlimited replies</span>
                </li>
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Advanced analytics</span>
                </li>
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Priority support</span>
                </li>
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Custom training</span>
                </li>
              </ul>
            </div>

            <div class="mt-8">
              <a href="/signup" class="block w-full py-3 px-6 rounded-full bg-blue-500 text-white text-center font-medium hover:bg-blue-600 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <!-- Enterprise -->
        <div 
          class="flex flex-col group h-full"
          in:fly={{ y: 20, duration: 800, delay: 800 }}
        >
          <div class="flex flex-col h-full bg-[#0B1121] border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:border-blue-500/20 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-blue-500/5">
            <div class="flex-1">
              <div class="mb-8">
                <h3 class="text-lg font-medium text-white/80 mb-4">Enterprise</h3>
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-bold text-white">Custom</span>
                </div>
              </div>

              <ul class="space-y-4">
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Custom solutions</span>
                </li>
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Dedicated support</span>
                </li>
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>SLA guarantee</span>
                </li>
                <li class="flex items-center gap-3 text-white/60">
                  <Check class="w-5 h-5 text-blue-400" />
                  <span>Advanced security</span>
                </li>
              </ul>
            </div>

            <div class="mt-8">
              <a href="/signup" class="block w-full py-3 px-6 rounded-full bg-white/5 text-white text-center font-medium hover:bg-white/10 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Animated background elements -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a0a,transparent_50%)] animate-pulse-slow -z-10" />
</section> 