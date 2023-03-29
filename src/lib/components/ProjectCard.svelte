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
	class={`${classP} relative flex flex-col items-start justify-end rounded-xl bg-neutral-800 bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 ease-in-out`}
	style={`background-image: url(${image})`}>
	<span class="text-4xl">{name}</span>
	<div
		class="absolute top-0 left-0 flex h-full w-full flex-col justify-between rounded-lg bg-black bg-cover bg-center bg-no-repeat p-5 opacity-0 transition-all hover:opacity-100"
		style={`background-image: url(${hoverImage})`}>
		<div class="flex flex-row justify-between text-3xl">
			<div class="flex flex-row gap-2 text-3xl">
				{#each tech as tech}
					<ProjectTech {tech} />
				{/each}
			</div>
		</div>
		<div class="flex flex-row justify-between">
			<span class="text-4xl">{name}</span>
		</div>
	</div>
</article>
