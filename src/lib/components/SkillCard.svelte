<script lang="ts">
	import IcSharpDiscord from '~icons/ic/sharp-discord';
	import CarbonLogoSvelte from '~icons/carbon/logo-svelte';
	import SimpleIconsHtml5 from '~icons/simple-icons/html5';
	import CibCss3Shiled from '~icons/cib/css3-shiled';
	import SimpleIconsJavascript from '~icons/simple-icons/javascript';
	import SimpleIconsTailwindcss from '~icons/simple-icons/tailwindcss';
	import SimpleIconsTypescript from '~icons/simple-icons/typescript';
	import VscodeIconsFileTypeDeno from '~icons/vscode-icons/file-type-deno';
	import SimpleIconsCloudflare from '~icons/simple-icons/cloudflare';
	import SimpleIconsGreensock from '~icons/simple-icons/greensock';
	export let tech: Tech = null;
	let classP = '';
	export { classP as class };
</script>

<div
	class={`${classP} flex h-40 w-32 flex-col items-center justify-evenly rounded-xl border-2 border-neutral-700 bg-neutral-800`}>
	{#if tech == 'svelte'}
		<CarbonLogoSvelte class="text-5xl" />
		<span class="text-3xl">Svelte</span>
	{:else if tech == 'html'}
		<SimpleIconsHtml5 class="text-5xl" />
		<span class="text-3xl">HTML</span>
	{:else if tech == 'css'}
		<CibCss3Shiled class="text-5xl" />
		<span class="text-3xl">CSS</span>
	{:else if tech == 'tailwind'}
		<SimpleIconsTailwindcss class="text-5xl" />
		<span class="text-3xl">Tailwind</span>
	{:else if tech == 'js'}
		<SimpleIconsJavascript class="text-5xl" />
		<span class="text-2xl">JavaScript</span>
	{:else if tech == 'ts'}
		<SimpleIconsTypescript class="text-5xl" />
		<span class="text-2xl">TypeScript</span>
	{:else if tech == 'deno'}
		<VscodeIconsFileTypeDeno class="text-5xl" />
		<span class="text-3xl">Deno</span>
	{:else if tech == 'cfw'}
		<SimpleIconsCloudflare class="text-5xl" />
		<span class="text-xl">Cloudflare</span>
	{:else if tech == 'djs'}
		<IcSharpDiscord class="text-5xl" />
		<span class="text-xl">Discord.js</span>
	{:else if tech == 'gsap'}
		<SimpleIconsGreensock class="text-5xl" />
		<span class="text-3xl">GSAP</span>
	{/if}
</div>
