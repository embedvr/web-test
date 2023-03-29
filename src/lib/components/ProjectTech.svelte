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

{#if tech == 'svelte'}
	<CarbonLogoSvelte class={`${classP}`} />
{:else if tech == 'html'}
	<SimpleIconsHtml5 class={`${classP}`} />
{:else if tech == 'css'}
	<CibCss3Shiled class={`${classP}`} />
{:else if tech == 'tailwind'}
	<SimpleIconsTailwindcss class={`${classP}`} />
{:else if tech == 'js'}
	<SimpleIconsJavascript class={`${classP}`} />
{:else if tech == 'ts'}
	<SimpleIconsTypescript class={`${classP}`} />
{:else if tech == 'deno'}
	<VscodeIconsFileTypeDeno class={`${classP}`} />
{:else if tech == 'cfw'}
	<SimpleIconsCloudflare class={`${classP}`} />
{:else if tech == 'djs'}
	<IcSharpDiscord class={`${classP}`} />
{:else if tech == 'gsap'}
	<SimpleIconsGreensock class={`${classP}`} />
{/if}
