import { c as create_ssr_component, v as validate_component, M as Menu, S as Sparkles, e as each, a as escape, b as add_attribute, T as Twitter, F as Facebook, I as Instagram, L as Linkedin } from "../../chunks/vendor.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/80 backdrop-blur-lg border-b border-blue-500/10"><div class="container mx-auto px-4"><nav class="flex items-center justify-between h-16"> <a href="/" class="text-xl font-bold text-white" data-svelte-h="svelte-1krs8zq">XGenAI</a>  <div class="hidden md:flex items-center gap-8" data-svelte-h="svelte-1dmvedq"><a href="#features" class="text-white/60 hover:text-white transition-colors">Features</a> <a href="#how-it-works" class="text-white/60 hover:text-white transition-colors">How It Works</a> <a href="#pricing" class="text-white/60 hover:text-white transition-colors">Pricing</a></div>  <div class="hidden md:flex items-center gap-4" data-svelte-h="svelte-1apa2zk"><a href="/login" class="text-white/80 hover:text-white transition-colors">Log in</a> <a href="/signup" class="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">Get Started</a></div>  <button class="md:hidden text-white/80 hover:text-white">${`${validate_component(Menu, "Menu").$$render($$result, { class: "w-6 h-6" }, {}, {})}`}</button></nav>  ${``}</div></header>`;
});
const css$4 = {
  code: ".font-inter{font-family:'Inter', sans-serif}.animate-float.svelte-1f95xnc{animation:svelte-1f95xnc-float 3s ease-in-out infinite}.animate-grid.svelte-1f95xnc{animation:svelte-1f95xnc-grid 20s linear infinite}@keyframes svelte-1f95xnc-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes svelte-1f95xnc-grid{0%{transform:translateY(0)}100%{transform:translateY(64px)}}",
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fade, fly } from \\"svelte/transition\\";\\nimport Button from \\"../shared/Button.svelte\\";\\nimport { Sparkles } from \\"lucide-svelte\\";\\n<\/script>\\n\\n<section class=\\"relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B1121] font-inter py-20 sm:py-32\\">\\n  <div class=\\"container mx-auto px-4 relative z-10\\">\\n    <div class=\\"max-w-5xl mx-auto text-center\\">\\n      <!-- Badge -->\\n      <div \\n        in:fly={{ y: 20, duration: 800, delay: 200 }}\\n        class=\\"inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 px-4 py-2 rounded-full mb-12 text-blue-400/80 animate-float\\"\\n      >\\n        <Sparkles class=\\"w-4 h-4\\" />\\n        <span class=\\"text-sm font-medium\\">Powered by Advanced AI</span>\\n      </div>\\n\\n      <!-- Heading -->\\n      <h1 class=\\"text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8\\">\\n        <span \\n          in:fly={{ y: 20, duration: 800, delay: 400 }}\\n          class=\\"text-white/80 block\\"\\n        >\\n          Generate Thoughtful\\n        </span>\\n        <span \\n          in:fly={{ y: 20, duration: 800, delay: 600 }}\\n          class=\\"text-white mt-2 block\\"\\n        >\\n          AI Replies for X\\n        </span>\\n      </h1>\\n      \\n      <!-- Description -->\\n      <p \\n        in:fly={{ y: 20, duration: 800, delay: 800 }}\\n        class=\\"text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed\\"\\n      >\\n        Engage your audience with intelligent, context-aware responses powered by cutting-edge AI technology.\\n      </p>\\n      \\n      <!-- CTA Buttons -->\\n      <div \\n        in:fly={{ y: 20, duration: 800, delay: 1000 }}\\n        class=\\"flex flex-col sm:flex-row items-center justify-center gap-6\\"\\n      >\\n        <a \\n          href=\\"/login\\" \\n          class=\\"px-8 py-4 rounded-full bg-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95\\"\\n        >\\n          Get Started Free\\n        </a>\\n        <a \\n          href=\\"#features\\" \\n          class=\\"group flex items-center gap-2 text-lg font-medium text-white/80 hover:text-blue-400 transition-colors\\"\\n        >\\n          Learn more \\n          <svg \\n            class=\\"w-5 h-5 transform transition-transform group-hover:translate-x-1\\" \\n            fill=\\"none\\" \\n            stroke=\\"currentColor\\" \\n            viewBox=\\"0 0 24 24\\"\\n          >\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 8l4 4m0 0l-4 4m4-4H3\\" />\\n          </svg>\\n        </a>\\n      </div>\\n\\n      <!-- Stats -->\\n      <div \\n        in:fly={{ y: 20, duration: 800, delay: 1200 }}\\n        class=\\"mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto\\"\\n      >\\n        {#each [\\n          { value: '10K+', label: 'Active Users' },\\n          { value: '1M+', label: 'AI Replies Generated' },\\n          { value: '98%', label: 'Satisfaction Rate' }\\n        ] as stat}\\n          <div class=\\"bg-blue-500/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:scale-105\\">\\n            <div class=\\"text-3xl font-bold text-white mb-2\\">{stat.value}</div>\\n            <div class=\\"text-white/60\\">{stat.label}</div>\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n\\n  <!-- Background -->\\n  <div class=\\"absolute inset-0 -z-10\\">\\n    <!-- Grid -->\\n    <div class=\\"absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:64px_64px] animate-grid\\" />\\n    \\n    <!-- Subtle gradient overlays -->\\n    <div class=\\"absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1121] to-[#0B1121]\\" />\\n    <div class=\\"absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a0a,transparent_70%)]\\" />\\n  </div>\\n</section>\\n\\n<style>\\n  :global(.font-inter) {\\n    font-family: 'Inter', sans-serif;\\n  }\\n\\n  .animate-float {\\n    animation: float 3s ease-in-out infinite;\\n  }\\n\\n  .animate-grid {\\n    animation: grid 20s linear infinite;\\n  }\\n\\n  @keyframes float {\\n    0%, 100% { transform: translateY(0); }\\n    50% { transform: translateY(-10px); }\\n  }\\n\\n  @keyframes grid {\\n    0% { transform: translateY(0); }\\n    100% { transform: translateY(64px); }\\n  }\\n</style> "],"names":[],"mappings":"AAmGU,WAAa,CACnB,WAAW,CAAE,OAAO,CAAC,CAAC,UACxB,CAEA,6BAAe,CACb,SAAS,CAAE,oBAAK,CAAC,EAAE,CAAC,WAAW,CAAC,QAClC,CAEA,4BAAc,CACZ,SAAS,CAAE,mBAAI,CAAC,GAAG,CAAC,MAAM,CAAC,QAC7B,CAEA,WAAW,oBAAM,CACf,EAAE,CAAE,IAAK,CAAE,SAAS,CAAE,WAAW,CAAC,CAAG,CACrC,GAAI,CAAE,SAAS,CAAE,WAAW,KAAK,CAAG,CACtC,CAEA,WAAW,mBAAK,CACd,EAAG,CAAE,SAAS,CAAE,WAAW,CAAC,CAAG,CAC/B,IAAK,CAAE,SAAS,CAAE,WAAW,IAAI,CAAG,CACtC"}`
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B1121] font-inter py-20 sm:py-32"><div class="container mx-auto px-4 relative z-10"><div class="max-w-5xl mx-auto text-center"> <div class="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 px-4 py-2 rounded-full mb-12 text-blue-400/80 animate-float svelte-1f95xnc">${validate_component(Sparkles, "Sparkles").$$render($$result, { class: "w-4 h-4" }, {}, {})} <span class="text-sm font-medium" data-svelte-h="svelte-jth48h">Powered by Advanced AI</span></div>  <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"><span class="text-white/80 block" data-svelte-h="svelte-1hedkcc">Generate Thoughtful</span> <span class="text-white mt-2 block" data-svelte-h="svelte-eust0d">AI Replies for X</span></h1>  <p class="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed" data-svelte-h="svelte-u5mn8m">Engage your audience with intelligent, context-aware responses powered by cutting-edge AI technology.</p>  <div class="flex flex-col sm:flex-row items-center justify-center gap-6" data-svelte-h="svelte-1g6on87"><a href="/login" class="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95">Get Started Free</a> <a href="#features" class="group flex items-center gap-2 text-lg font-medium text-white/80 hover:text-blue-400 transition-colors">Learn more 
          <svg class="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div>  <div class="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">${each(
    [
      { value: "10K+", label: "Active Users" },
      {
        value: "1M+",
        label: "AI Replies Generated"
      },
      { value: "98%", label: "Satisfaction Rate" }
    ],
    (stat) => {
      return `<div class="bg-blue-500/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 hover:scale-105"><div class="text-3xl font-bold text-white mb-2">${escape(stat.value)}</div> <div class="text-white/60">${escape(stat.label)}</div> </div>`;
    }
  )}</div></div></div>  <div class="absolute inset-0 -z-10" data-svelte-h="svelte-x4vp08"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:64px_64px] animate-grid svelte-1f95xnc"></div>  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1121] to-[#0B1121]"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a0a,transparent_70%)]"></div></div> </section>`;
});
const css$3 = {
  code: "@keyframes svelte-1p07zd1-iconFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.group.svelte-1p07zd1{transition:all 0.3s ease-in-out}",
  map: '{"version":3,"file":"Features.svelte","sources":["Features.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Shield, Zap, Users, Sparkles } from \\"lucide-svelte\\";\\nimport { fade, fly } from \\"svelte/transition\\";\\nimport { onMount } from \\"svelte\\";\\nlet visible = false;\\nonMount(() => {\\n  visible = true;\\n});\\nconst features = [\\n  {\\n    icon: Shield,\\n    title: \\"Smart Context Understanding\\",\\n    description: \\"Our AI analyzes conversation context for relevant responses\\"\\n  },\\n  {\\n    icon: Zap,\\n    title: \\"Lightning Fast Replies\\",\\n    description: \\"Generate engaging responses in seconds\\"\\n  },\\n  {\\n    icon: Users,\\n    title: \\"Personality Matching\\",\\n    description: \\"Maintains your unique voice and style\\"\\n  },\\n  {\\n    icon: Sparkles,\\n    title: \\"Advanced AI Models\\",\\n    description: \\"Powered by cutting-edge language models\\"\\n  }\\n];\\n<\/script>\\n\\n<section id=\\"features\\" class=\\"relative bg-[#0B1121] py-24 overflow-hidden\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    {#if visible}\\n      <div \\n        class=\\"max-w-3xl mx-auto text-center mb-16\\"\\n        in:fly={{ y: 20, duration: 800, delay: 200 }}\\n      >\\n        <h2 class=\\"text-3xl md:text-4xl font-bold text-white mb-6\\">Powerful Features</h2>\\n        <p class=\\"text-white/60\\">Advanced AI capabilities to enhance your X presence</p>\\n      </div>\\n\\n      <div class=\\"grid md:grid-cols-2 gap-8 max-w-5xl mx-auto\\">\\n        {#each features as feature, i}\\n          <div \\n            class=\\"relative group\\"\\n            in:fly={{ y: 20, duration: 800, delay: 400 + (i * 200) }}\\n          >\\n            <!-- Hover gradient -->\\n            <div class=\\"absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl\\" />\\n            \\n            <!-- Card content -->\\n            <div class=\\"relative bg-blue-500/5 border border-blue-500/10 rounded-xl p-8 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]\\">\\n              <div class=\\"relative\\">\\n                <div class=\\"absolute -inset-1 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500\\" />\\n                <svelte:component \\n                  this={feature.icon} \\n                  class=\\"w-8 h-8 text-blue-400 relative [animation:iconFloat_3s_ease-in-out_infinite]\\"\\n                />\\n              </div>\\n              \\n              <h3 class=\\"text-xl font-semibold text-white mb-3 mt-4\\">{feature.title}</h3>\\n              <p class=\\"text-white/60\\">{feature.description}</p>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n\\n  <!-- Decorative elements -->\\n  <div class=\\"absolute top-1/2 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10\\" />\\n  <div class=\\"absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10\\" />\\n</section>\\n\\n<style>\\n  @keyframes iconFloat {\\n    0%, 100% { transform: translateY(0); }\\n    50% { transform: translateY(-5px); }\\n  }\\n\\n  /* Remove the unused .animate-icon class */\\n  .group {\\n    transition: all 0.3s ease-in-out;\\n  }\\n</style> "],"names":[],"mappings":"AA4EE,WAAW,wBAAU,CACnB,EAAE,CAAE,IAAK,CAAE,SAAS,CAAE,WAAW,CAAC,CAAG,CACrC,GAAI,CAAE,SAAS,CAAE,WAAW,IAAI,CAAG,CACrC,CAGA,qBAAO,CACL,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB"}'
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="features" class="relative bg-[#0B1121] py-24 overflow-hidden"><div class="container mx-auto px-4">${``}</div>  <div class="absolute top-1/2 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10"></div> <div class="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10"></div> </section>`;
});
const css$2 = {
  code: ".group.svelte-h2fr3c{transition:all 0.3s ease-in-out}",
  map: `{"version":3,"file":"HowItWorks.svelte","sources":["HowItWorks.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fade, fly } from \\"svelte/transition\\";\\nimport { onMount } from \\"svelte\\";\\nlet visible = false;\\nonMount(() => {\\n  visible = true;\\n});\\nconst steps = [\\n  {\\n    number: \\"01\\",\\n    title: \\"Connect Your X Account\\",\\n    description: \\"Securely link your X profile with just a few clicks using OAuth2.\\"\\n  },\\n  {\\n    number: \\"02\\",\\n    title: \\"Select a Conversation\\",\\n    description: \\"Choose any X post or thread you want to respond to from your mentions.\\"\\n  },\\n  {\\n    number: \\"03\\",\\n    title: \\"Generate AI Replies\\",\\n    description: \\"Get contextually relevant, engaging responses powered by advanced AI.\\"\\n  },\\n  {\\n    number: \\"04\\",\\n    title: \\"Review and Post\\",\\n    description: \\"Edit the generated replies if needed and post directly to X.\\"\\n  }\\n];\\n<\/script>\\n\\n<section id=\\"how-it-works\\" class=\\"relative bg-[#0B1121] py-24 overflow-hidden\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    {#if visible}\\n      <div \\n        class=\\"max-w-3xl mx-auto text-center mb-16\\"\\n        in:fly={{ y: 20, duration: 800, delay: 200 }}\\n      >\\n        <h2 class=\\"text-3xl md:text-4xl font-bold text-white mb-6\\">Get started with XGenAI in four simple steps</h2>\\n      </div>\\n\\n      <div class=\\"max-w-3xl mx-auto\\">\\n        {#each steps as step, i}\\n          <div \\n            class=\\"flex gap-8 mb-16 last:mb-0 relative group\\"\\n            in:fly={{ y: 20, duration: 800, delay: 400 + (i * 200) }}\\n          >\\n            <!-- Number Circle -->\\n            <div class=\\"relative shrink-0\\">\\n              <div class=\\"w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-lg font-medium text-white/60 relative bg-[#0B1121] group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-300\\">\\n                {step.number}\\n              </div>\\n              {#if step.number !== '04'}\\n                <div class=\\"absolute top-12 left-1/2 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-white/10 to-transparent -translate-x-1/2\\" />\\n              {/if}\\n            </div>\\n\\n            <!-- Content -->\\n            <div class=\\"flex-1\\">\\n              <h3 class=\\"text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300\\">\\n                {step.title}\\n              </h3>\\n              <p class=\\"text-white/60 text-lg group-hover:text-white/70 transition-colors duration-300\\">\\n                {step.description}\\n              </p>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n\\n  <!-- Background pattern -->\\n  <div class=\\"absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50\\" />\\n</section>\\n\\n<style>\\n  .group {\\n    transition: all 0.3s ease-in-out;\\n  }\\n</style> "],"names":[],"mappings":"AA4EE,oBAAO,CACL,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB"}`
};
const HowItWorks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="how-it-works" class="relative bg-[#0B1121] py-24 overflow-hidden"><div class="container mx-auto px-4">${``}</div>  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div> </section>`;
});
const Pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="pricing" class="relative bg-[#0B1121] py-24 overflow-hidden"><div class="container mx-auto px-4">${``}</div>  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a0a,transparent_50%)] animate-pulse-slow -z-10"></div></section>`;
});
const css$1 = {
  code: "@keyframes svelte-1u7b2af-pulse-slow{0%,100%{opacity:0.5}50%{opacity:0.7}}.animate-pulse-slow.svelte-1u7b2af{animation:svelte-1u7b2af-pulse-slow 4s ease-in-out infinite}.group.svelte-1u7b2af{transition:all 0.3s ease-in-out}",
  map: '{"version":3,"file":"Feedback.svelte","sources":["Feedback.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Star } from \\"lucide-svelte\\";\\nimport { fade, fly } from \\"svelte/transition\\";\\nimport { onMount } from \\"svelte\\";\\nlet visible = false;\\nonMount(() => {\\n  visible = true;\\n});\\nconst feedbacks = [\\n  {\\n    name: \\"Alex Thompson\\",\\n    role: \\"Social Media Manager\\",\\n    comment: \\"XGenAI has transformed how I manage social media interactions. The AI responses are incredibly natural.\\",\\n    rating: 5\\n  },\\n  {\\n    name: \\"Sarah Chen\\",\\n    role: \\"Content Creator\\",\\n    comment: \\"The personality matching feature is spot-on. It feels like the responses are coming directly from me.\\",\\n    rating: 5\\n  },\\n  {\\n    name: \\"Michael Roberts\\",\\n    role: \\"Digital Marketer\\",\\n    comment: \\"Impressive technology that saves me hours every day. The contextual understanding is remarkable.\\",\\n    rating: 5\\n  }\\n];\\n<\/script>\\n\\n<section class=\\"relative bg-[#0C1322] py-24 overflow-hidden\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    {#if visible}\\n      <div \\n        class=\\"max-w-3xl mx-auto text-center mb-16\\"\\n        in:fly={{ y: 20, duration: 800, delay: 200 }}\\n      >\\n        <h2 class=\\"text-3xl md:text-4xl font-bold text-white mb-6\\">What Users Say</h2>\\n        <p class=\\"text-white/60\\">Join thousands of satisfied users worldwide</p>\\n      </div>\\n\\n      <div class=\\"grid md:grid-cols-3 gap-8 max-w-5xl mx-auto\\">\\n        {#each feedbacks as feedback, i}\\n          <div \\n            class=\\"group\\"\\n            in:fly={{ y: 20, duration: 800, delay: 400 + (i * 200) }}\\n          >\\n            <div class=\\"bg-[#0B1121] border border-blue-500/10 rounded-xl p-8 hover:border-blue-500/20 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-blue-500/5\\">\\n              <!-- Rating with animation -->\\n              <div class=\\"flex gap-1 mb-4\\">\\n                {#each Array(feedback.rating) as _}\\n                  <Star class=\\"w-5 h-5 fill-blue-400 text-blue-400 transition-transform duration-300 group-hover:scale-110\\" />\\n                {/each}\\n              </div>\\n              \\n              <!-- Comment with hover effect -->\\n              <p class=\\"text-white/80 mb-6 transition-colors duration-300 group-hover:text-white\\">\\n                \\"{feedback.comment}\\"\\n              </p>\\n              \\n              <!-- User info with subtle animation -->\\n              <div class=\\"relative\\">\\n                <div class=\\"absolute -inset-2 bg-blue-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500\\" />\\n                <div class=\\"relative\\">\\n                  <div class=\\"font-medium text-white group-hover:text-blue-400 transition-colors duration-300\\">\\n                    {feedback.name}\\n                  </div>\\n                  <div class=\\"text-white/60 text-sm\\">{feedback.role}</div>\\n                </div>\\n              </div>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n\\n  <!-- Animated background elements -->\\n  <div class=\\"absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e3a8a0a,transparent_70%)] animate-pulse -z-10\\" />\\n  <div class=\\"absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-pulse-slow -z-10\\" />\\n  <div class=\\"absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-pulse-slow delay-1000 -z-10\\" />\\n</section>\\n\\n<style>\\n  @keyframes pulse-slow {\\n    0%, 100% { opacity: 0.5; }\\n    50% { opacity: 0.7; }\\n  }\\n\\n  .animate-pulse-slow {\\n    animation: pulse-slow 4s ease-in-out infinite;\\n  }\\n\\n  /* Smooth transitions for all interactive elements */\\n  .group {\\n    transition: all 0.3s ease-in-out;\\n  }\\n</style> "],"names":[],"mappings":"AAmFE,WAAW,yBAAW,CACpB,EAAE,CAAE,IAAK,CAAE,OAAO,CAAE,GAAK,CACzB,GAAI,CAAE,OAAO,CAAE,GAAK,CACtB,CAEA,kCAAoB,CAClB,SAAS,CAAE,yBAAU,CAAC,EAAE,CAAC,WAAW,CAAC,QACvC,CAGA,qBAAO,CACL,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB"}'
};
const Feedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="relative bg-[#0C1322] py-24 overflow-hidden"><div class="container mx-auto px-4">${``}</div>  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e3a8a0a,transparent_70%)] animate-pulse -z-10"></div> <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-pulse-slow -z-10 svelte-1u7b2af"></div> <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[100px] animate-pulse-slow delay-1000 -z-10 svelte-1u7b2af"></div> </section>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "md" } = $$props;
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `<a href="/" class="${"font-bold " + escape(sizeClasses[size], true) + " text-primary-500"}">XGenAI</a>`;
});
const css = {
  code: ".bg-gradient-radial.svelte-ut2xgo{background-image:radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Twitter, Facebook, Instagram, Linkedin } from \\"lucide-svelte\\";\\nimport Logo from \\"../shared/Logo.svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nconst currentYear = (/* @__PURE__ */ new Date()).getFullYear();\\nconst socialLinks = [\\n  {\\n    icon: Twitter,\\n    href: \\"https://twitter.com/xgenai\\",\\n    label: \\"Follow us on Twitter\\"\\n  },\\n  {\\n    icon: Facebook,\\n    href: \\"https://facebook.com/xgenai\\",\\n    label: \\"Follow us on Facebook\\"\\n  },\\n  {\\n    icon: Instagram,\\n    href: \\"https://instagram.com/xgenai\\",\\n    label: \\"Follow us on Instagram\\"\\n  },\\n  {\\n    icon: Linkedin,\\n    href: \\"https://linkedin.com/company/xgenai\\",\\n    label: \\"Follow us on LinkedIn\\"\\n  }\\n];\\nconst links = {\\n  product: [\\n    { href: \\"#features\\", label: \\"Features\\" },\\n    { href: \\"#how-it-works\\", label: \\"How It Works\\" },\\n    { href: \\"#pricing\\", label: \\"Pricing\\" },\\n    { href: \\"/docs\\", label: \\"Documentation\\" }\\n  ],\\n  company: [\\n    { href: \\"/about\\", label: \\"About Us\\" },\\n    { href: \\"/blog\\", label: \\"Blog\\" },\\n    { href: \\"/careers\\", label: \\"Careers\\" },\\n    { href: \\"/contact\\", label: \\"Contact\\" }\\n  ],\\n  legal: [\\n    { href: \\"/privacy\\", label: \\"Privacy Policy\\" },\\n    { href: \\"/terms\\", label: \\"Terms of Service\\" },\\n    { href: \\"/cookies\\", label: \\"Cookie Policy\\" }\\n  ]\\n};\\n<\/script>\\n\\n<footer class=\\"relative overflow-hidden bg-gray-900/80 backdrop-blur-md py-16 px-4\\">\\n  <div class=\\"container mx-auto\\" in:fade={{ duration: 300, delay: 200 }}>\\n    <!-- Main Footer Content -->\\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12\\">\\n      <!-- Brand Section -->\\n      <div class=\\"lg:col-span-2\\">\\n        <Logo size=\\"lg\\" />\\n        <p class=\\"text-gray-400 mt-4 max-w-md\\">\\n          Empowering social media engagement with cutting-edge AI technology. Generate thoughtful, contextual responses that keep your audience engaged.\\n        </p>\\n        <div class=\\"flex gap-4 mt-6\\">\\n          {#each socialLinks as { icon: Icon, href, label }}\\n            <a \\n              {href}\\n              class=\\"text-gray-400 hover:text-primary-400 transition-colors duration-200\\"\\n              aria-label={label}\\n              target=\\"_blank\\"\\n              rel=\\"noopener noreferrer\\"\\n            >\\n              <Icon class=\\"w-5 h-5\\" />\\n            </a>\\n          {/each}\\n        </div>\\n      </div>\\n\\n      <!-- Links Sections -->\\n      <div>\\n        <h3 class=\\"text-white font-semibold mb-4\\">Product</h3>\\n        <ul class=\\"space-y-3\\">\\n          {#each links.product as link}\\n            <li>\\n              <a href={link.href} class=\\"text-gray-400 hover:text-white transition-colors duration-200\\">\\n                {link.label}\\n              </a>\\n            </li>\\n          {/each}\\n        </ul>\\n      </div>\\n\\n      <div>\\n        <h3 class=\\"text-white font-semibold mb-4\\">Company</h3>\\n        <ul class=\\"space-y-3\\">\\n          {#each links.company as link}\\n            <li>\\n              <a href={link.href} class=\\"text-gray-400 hover:text-white transition-colors duration-200\\">\\n                {link.label}\\n              </a>\\n            </li>\\n          {/each}\\n        </ul>\\n      </div>\\n\\n      <div>\\n        <h3 class=\\"text-white font-semibold mb-4\\">Legal</h3>\\n        <ul class=\\"space-y-3\\">\\n          {#each links.legal as link}\\n            <li>\\n              <a href={link.href} class=\\"text-gray-400 hover:text-white transition-colors duration-200\\">\\n                {link.label}\\n              </a>\\n            </li>\\n          {/each}\\n        </ul>\\n      </div>\\n    </div>\\n\\n    <!-- Footer Bottom -->\\n    <div class=\\"pt-8 border-t border-gray-800\\">\\n      <div class=\\"flex flex-col md:flex-row justify-between items-center gap-4\\">\\n        <p class=\\"text-gray-400 text-sm\\">\\n          &copy; {currentYear} XGenAI. All rights reserved.\\n        </p>\\n        <div class=\\"flex gap-6\\">\\n          <a href=\\"/sitemap\\" class=\\"text-gray-400 hover:text-white text-sm transition-colors duration-200\\">\\n            Sitemap\\n          </a>\\n          <a href=\\"/accessibility\\" class=\\"text-gray-400 hover:text-white text-sm transition-colors duration-200\\">\\n            Accessibility\\n          </a>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n\\n  <!-- Background Effects -->\\n  <div class=\\"absolute inset-0 -z-10\\">\\n    <div class=\\"absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent\\" />\\n  </div>\\n</footer>\\n\\n<style>\\n  .bg-gradient-radial {\\n    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);\\n  }\\n</style> "],"names":[],"mappings":"AA0IE,iCAAoB,CAClB,gBAAgB,CAAE,gBAAgB,MAAM,CAAC,EAAE,CAAC,MAAM,CAAC,CAAC,IAAI,kBAAkB,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,gBAAgB,CAAC,CAAC,IAAI,CACxI"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/xgenai",
      label: "Follow us on Twitter"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/xgenai",
      label: "Follow us on Facebook"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/xgenai",
      label: "Follow us on Instagram"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/xgenai",
      label: "Follow us on LinkedIn"
    }
  ];
  const links = {
    product: [
      { href: "#features", label: "Features" },
      {
        href: "#how-it-works",
        label: "How It Works"
      },
      { href: "#pricing", label: "Pricing" },
      { href: "/docs", label: "Documentation" }
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" }
    ],
    legal: [
      {
        href: "/privacy",
        label: "Privacy Policy"
      },
      {
        href: "/terms",
        label: "Terms of Service"
      },
      { href: "/cookies", label: "Cookie Policy" }
    ]
  };
  $$result.css.add(css);
  return `<footer class="relative overflow-hidden bg-gray-900/80 backdrop-blur-md py-16 px-4"><div class="container mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"> <div class="lg:col-span-2">${validate_component(Logo, "Logo").$$render($$result, { size: "lg" }, {}, {})} <p class="text-gray-400 mt-4 max-w-md" data-svelte-h="svelte-twniue">Empowering social media engagement with cutting-edge AI technology. Generate thoughtful, contextual responses that keep your audience engaged.</p> <div class="flex gap-4 mt-6">${each(socialLinks, ({ icon: Icon, href, label }) => {
    return `<a${add_attribute("href", href, 0)} class="text-gray-400 hover:text-primary-400 transition-colors duration-200"${add_attribute("aria-label", label, 0)} target="_blank" rel="noopener noreferrer">${validate_component(Icon, "Icon").$$render($$result, { class: "w-5 h-5" }, {}, {})} </a>`;
  })}</div></div>  <div><h3 class="text-white font-semibold mb-4" data-svelte-h="svelte-rp47tw">Product</h3> <ul class="space-y-3">${each(links.product, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-gray-400 hover:text-white transition-colors duration-200">${escape(link.label)}</a> </li>`;
  })}</ul></div> <div><h3 class="text-white font-semibold mb-4" data-svelte-h="svelte-8q1hkc">Company</h3> <ul class="space-y-3">${each(links.company, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-gray-400 hover:text-white transition-colors duration-200">${escape(link.label)}</a> </li>`;
  })}</ul></div> <div><h3 class="text-white font-semibold mb-4" data-svelte-h="svelte-rorjq2">Legal</h3> <ul class="space-y-3">${each(links.legal, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-gray-400 hover:text-white transition-colors duration-200">${escape(link.label)}</a> </li>`;
  })}</ul></div></div>  <div class="pt-8 border-t border-gray-800"><div class="flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-gray-400 text-sm">© ${escape(currentYear)} XGenAI. All rights reserved.</p> <div class="flex gap-6" data-svelte-h="svelte-1i9ciel"><a href="/sitemap" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Sitemap</a> <a href="/accessibility" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Accessibility</a></div></div></div></div>  <div class="absolute inset-0 -z-10" data-svelte-h="svelte-n3p521"><div class="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent svelte-ut2xgo"></div></div> </footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main> ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}  ${validate_component(Features, "Features").$$render($$result, {}, {}, {})}  ${validate_component(HowItWorks, "HowItWorks").$$render($$result, {}, {}, {})}  ${validate_component(Feedback, "Feedback").$$render($$result, {}, {}, {})}  ${validate_component(Pricing, "Pricing").$$render($$result, {}, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
