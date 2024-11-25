<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
</script>

<a href="/" class="font-bold {sizeClasses[size]} text-primary-500">
  XGenAI
</a> 