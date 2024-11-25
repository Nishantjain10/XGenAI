<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { Check } from 'lucide-svelte';
  import Button from '../shared/Button.svelte';

  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: 'month',
      description: 'Perfect for individuals and small accounts',
      features: [
        '100 AI-generated replies per month',
        'Basic analytics',
        'Email support',
        'Standard response time'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'month',
      description: 'Best for growing accounts and businesses',
      features: [
        'Unlimited AI-generated replies',
        'Advanced analytics',
        'Priority support',
        'Custom AI training',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom needs',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'SLA support',
        'Advanced security features',
        'Custom AI model training'
      ]
    }
  ];
</script>

<section id="pricing" class="relative py-32 overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16" in:fade={{ duration: 300, delay: 200 }}>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
        Simple, Transparent Pricing
      </h2>
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">
        Choose the perfect plan for your needs. All plans include a 14-day free trial.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each plans as plan, i}
        <div 
          class="relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 {plan.popular ? 'border-2 border-primary-500' : ''}"
          in:fly={{ y: 20, duration: 600, delay: 300 + (i * 100) }}
        >
          {#if plan.popular}
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
          {/if}

          <div class="mb-8">
            <h3 class="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p class="text-gray-400 mb-4">{plan.description}</p>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-bold text-white">{plan.price}</span>
              {#if plan.period}
                <span class="text-gray-400">/{plan.period}</span>
              {/if}
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            {#each plan.features as feature}
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-primary-500 mt-0.5" />
                <span class="text-gray-300">{feature}</span>
              </li>
            {/each}
          </ul>

          <Button 
            variant={plan.popular ? 'primary' : 'outline'}
            size="lg"
            fullWidth
          >
            {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
          </Button>
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
    <div class="absolute right-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary-500/20 blur-3xl" />
  </div>
</section> 