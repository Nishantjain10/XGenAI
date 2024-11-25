<script lang="ts">
  import Footer from '$lib/components/shared/Footer.svelte';
  import MentionsList from '$lib/components/MentionsList.svelte';
</script>

<div class="min-h-screen flex flex-col bg-[#070E1A]">
  <main class="flex-grow container mx-auto px-4">
    <MentionsList />
  </main>
  <Footer />
</div> 