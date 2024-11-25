<script lang="ts">
  import Footer from '$lib/components/shared/Footer.svelte';
  import MentionsList from '$lib/components/MentionsList.svelte';
  
  // You might want to get this from an environment variable or auth store
  const accessToken = import.meta.env.VITE_TWITTER_ACCESS_TOKEN || '';
</script>

<div class="min-h-screen flex flex-col bg-[#070E1A]">
  <main class="flex-grow container mx-auto px-4">
    <MentionsList {accessToken} />
  </main>
  <Footer />
</div> 