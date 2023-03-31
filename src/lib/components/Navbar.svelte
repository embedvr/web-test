<script lang="ts">
	import { fade } from 'svelte/transition';
	import MdiTwitter from '~icons/mdi/twitter';
	import MdiGithub from '~icons/mdi/github';
	import SimpleIconsOsu from '~icons/simple-icons/osu';
	import IcSharpDiscord from '~icons/ic/sharp-discord';
	import MaterialSymbolsMail from '~icons/material-symbols/mail';

	const handleAnchorScroll = (e) => {
		const link = e.currentTarget;
		const id = new URL(link.href).hash.replace('#', '');
		const target = document.getElementById(id);
		console.log(e, link, id, target);
		if (target) {
			window.scrollTo({
				top: target.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	export let navVisible: boolean = false;
</script>

{#if navVisible}
	<nav
		class="fixed top-0 left-0 z-40 h-20 w-full bg-black bg-opacity-75"
		transition:fade>
		<div class="flex flex-row items-center justify-between px-6 py-4">
			<a
				class="white-shadow navItem text-2xl transition-all"
				href="#top"
				on:click|preventDefault={handleAnchorScroll}>embed</a>
			<div class="flex flex-row justify-around gap-6">
				<a
					href="https://twitter.com/uwunetes"
					class="navItem"
					target="_blank"
					rel="noreferrer">
					<MdiTwitter
						class="twitter-shadow h-10 w-10 transition-all hover:text-socials-twitter" />
				</a>
				<a
					href="https://github.com/embedvr"
					class="navItem"
					target="_blank"
					rel="noreferrer">
					<MdiGithub
						class="white-shadow h-10 w-10 transition-all hover:text-socials-github" />
				</a>
				<a
					href="https://osu.ppy.sh/users/embed"
					class="navItem"
					target="_blank"
					rel="noreferrer">
					<SimpleIconsOsu
						class="osu-shadow h-10 w-10 transition-all hover:text-socials-osu" />
				</a>
				<a
					href="https://discord.id/?prefill=476641014841475084"
					class="navItem"
					target="_blank"
					rel="noreferrer">
					<IcSharpDiscord
						class="discord-shadow h-10 w-10 transition-all hover:text-socials-discord" />
				</a>
				<a
					href="mailto:brydon@helium.email"
					class="navItem"
					target="_blank"
					rel="noreferrer">
					<MaterialSymbolsMail
						class="white-shadow h-10 w-10 transition-all hover:text-socials-mail" />
				</a>
			</div>
		</div>
	</nav>
{/if}
