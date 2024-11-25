<script lang="ts">
  export let variant: 'primary' | 'outline' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let type: 'button' | 'submit' = 'button';
  export let disabled = false;
  export let fullWidth = false;
  export let href: string | undefined = undefined;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white'
  };
</script>

{#if href}
  <a
    {href}
    class="rounded-full font-medium transition-colors duration-200 {sizeClasses[size]} {variantClasses[variant]} {fullWidth ? 'w-full' : ''} inline-flex items-center justify-center"
  >
    <slot />
  </a>
{:else}
  <button
    {type}
    {disabled}
    class="rounded-full font-medium transition-colors duration-200 {sizeClasses[size]} {variantClasses[variant]} {fullWidth ? 'w-full' : ''}"
    on:click
  >
    <slot />
  </button>
{/if} 