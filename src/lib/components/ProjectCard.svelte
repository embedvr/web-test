<script lang="ts">
	import { fade } from 'svelte/transition';
	import IconoirOpenNewWindow from '~icons/iconoir/open-new-window';
	import MdiGithub from '~icons/mdi/github';
	import ProjectTech from './ProjectTech.svelte';
	import SkillCard from './SkillCard.svelte';
	let classP = '';
	export let image = '';
	export let hoverImage = '';
	export let name = '';
	export let link = '';
	export let code = '';
	export let tech: Tech[] = [];
	export { classP as class };
</script>

<article
	class={`${classP} flex flex-col items-start justify-end rounded-xl bg-neutral-800 p-5`}>
	<span class="text-4xl">{name}</span>
</article>
