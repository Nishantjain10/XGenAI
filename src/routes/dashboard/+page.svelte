<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { twitterUser } from '$lib/stores/twitter';
  import { getCurrentSession, deleteCurrentSession, findUserByTwitterId } from '$lib/appwrite';
  import MentionsList from '$lib/components/MentionsList.svelte';
  import { LogOut, Settings, History, MessageSquarePlus } from 'lucide-svelte';
  import { fade, fly, slide } from 'svelte/transition';

  let loading = true;
  let error = '';
  let accessToken = '';

  onMount(async () => {
    try {
      // Check if user is authenticated
      const session = await getCurrentSession();
      if (!session) {
        await goto('/login');
        return;
      }

      // Get access token from Appwrite document
      if ($twitterUser?.username) {
        const userData = await findUserByTwitterId($twitterUser.username);
        if (userData) {
          accessToken = userData.accessToken;
        }
      }

      loading = false;
    } catch (e) {
      error = 'Failed to load dashboard';
      console.error('Dashboard error:', e);
      loading = false;
    }
  });

  const handleLogout = async () => {
    try {
      loading = true;
      await deleteCurrentSession();
      twitterUser.set(null);
      await goto('/login');
    } catch (e) {
      error = 'Failed to logout';
      console.error('Logout error:', e);
      loading = false;
    }
  };
</script>

<div class="min-h-screen bg-[#0B1121]">
  <!-- Header with glass effect and slide animation -->
  <header 
    class="sticky top-0 z-50 bg-[#0C1322]/80 backdrop-blur-xl border-b border-blue-500/10"
    in:slide={{ duration: 300 }}
  >
    <div class="container mx-auto px-4 h-16">
      <div class="flex items-center justify-between h-full">
        <h1 class="text-xl font-bold text-white">XGenAI Dashboard</h1>
        <button 
          class="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-300 hover:scale-105"
          on:click={handleLogout}
        >
          <LogOut class="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>

  {#if loading}
    <div class="flex flex-col items-center justify-center min-h-[80vh]"
      in:fade={{ duration: 300 }}
    >
      <div class="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-white/60">Loading dashboard...</p>
    </div>
  {:else if error}
    <div class="container mx-auto px-4 py-8"
      in:fly={{ y: 20, duration: 500 }}
    >
      <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
        <p class="text-red-400 mb-4">{error}</p>
        <a 
          href="/login" 
          class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105"
        >
          Back to Login
        </a>
      </div>
    </div>
  {:else}
    <main class="container mx-auto px-4 py-8">
      {#if $twitterUser}
        <!-- User Info Card with fly animation -->
        <div 
          class="bg-[#0C1322]/50 backdrop-blur-xl border border-blue-500/10 rounded-xl p-8 mb-8 hover:border-blue-500/20 transition-all duration-300 hover:scale-[1.01]"
          in:fly={{ y: 20, duration: 500 }}
        >
          <div class="flex items-center gap-6">
            {#if $twitterUser.profile_image_url}
              <img 
                src={$twitterUser.profile_image_url} 
                alt={$twitterUser.name} 
                class="w-20 h-20 rounded-full border-2 border-blue-500/20"
              />
            {/if}
            <div>
              <h2 class="text-2xl font-bold text-white mb-1">{$twitterUser.name}</h2>
              <p class="text-white/60">@{$twitterUser.username}</p>
            </div>
          </div>
        </div>

        <!-- Quick Actions with staggered animations -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {#each [
            { icon: MessageSquarePlus, label: 'Generate Reply', color: 'blue', active: true },
            { icon: History, label: 'View History', color: 'purple', active: false },
            { icon: Settings, label: 'Settings', color: 'emerald', active: false }
          ] as action, i}
            <button 
              class="group relative bg-[#0C1322]/50 backdrop-blur-xl border border-{action.color}-500/10 rounded-xl p-6 
                     hover:border-{action.color}-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              in:fly={{ y: 20, duration: 500, delay: 200 + (i * 100) }}
            >
              <!-- Animated gradient background -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-gradient-to-r from-{action.color}-500/10 via-transparent to-transparent animate-gradient"></div>
              
              <!-- Animated glow effect -->
              <div class="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-{action.color}-500/20 blur-lg"></div>
              
              <!-- Content with icon bounce animation -->
              <div class="relative flex items-center gap-3">
                <div class="group-hover:animate-bounce-subtle">
                  {#if action.color === 'blue'}
                    <svelte:component this={action.icon} class="w-5 h-5 text-blue-400" />
                  {:else if action.color === 'purple'}
                    <svelte:component this={action.icon} class="w-5 h-5 text-purple-400" />
                  {:else}
                    <svelte:component this={action.icon} class="w-5 h-5 text-emerald-400" />
                  {/if}
                </div>
                
                <span class="text-white group-hover:text-{action.color}-400 transition-colors">
                  {action.label}
                </span>
                {#if action.active}
                  <span class="absolute -top-1 -right-1 w-2 h-2 bg-{action.color}-400 rounded-full animate-pulse"></span>
                {/if}
              </div>
            </button>
          {/each}
        </div>

        <!-- Mentions List with fade in -->
        <div in:fade={{ duration: 500, delay: 500 }}>
          <MentionsList {accessToken} />
        </div>
      {:else}
        <p class="text-white/60 text-center" in:fade>No user data available</p>
      {/if}
    </main>
  {/if}

  <!-- Animated background effects -->
  <div class="fixed inset-0 -z-10">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a0a,transparent_70%)] animate-pulse-slow"></div>
    <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-float"></div>
    <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/5 blur-[100px] animate-float delay-1000"></div>
  </div>
</div>

<style>
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.05); }
  }

  @keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  :global(.animate-gradient) {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  :global(.animate-bounce-subtle) {
    animation: bounce-subtle 2s ease-in-out infinite;
  }

  :global(.animate-float) {
    animation: float 6s ease-in-out infinite;
  }
</style> 