<script lang="ts">
	import { fade } from 'svelte/transition';
	import MdiLinkVariant from '~icons/mdi/link-variant';
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
	class={`${classP} relative flex flex-col items-start justify-end rounded-xl border-2 border-neutral-500 bg-neutral-800 bg-cover bg-center bg-no-repeat p-5 transition-all`}
	style={`background-image: url(${image})`}>
	<span class="text-4xl">{name}</span>
	<div
		class="absolute top-0 left-0 flex h-full w-full flex-col justify-end rounded-lg bg-cover bg-center bg-no-repeat opacity-0 transition-all hover:opacity-100"
		style={`background-image: url(${hoverImage})`}>
		<div class="flex flex-col gap-2 rounded-t-xl rounded-b-lg bg-black p-5">
			<div class="flex flex-row justify-between text-3xl">
				<div class="flex flex-row gap-2 text-3xl">
					{#each tech as tech}
						<ProjectTech {tech} />
					{/each}
				</div>
			</div>
			<div class="flex flex-row justify-between">
				<span class="text-4xl">{name}</span>
				<div class="flex flex-row gap-2">
					{#if link}
						<a href={link} target="_blank" rel="noopener noreferrer">
							<MdiLinkVariant class="white-shadow text-4xl" />
						</a>
					{/if}
					{#if code}
						<a href={code} target="_blank" rel="noopener noreferrer">
							<MdiGithub class="white-shadow text-4xl" />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</article>
