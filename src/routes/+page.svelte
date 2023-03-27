<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import IcOutlineKeyboardArrowDown from '~icons/ic/outline-keyboard-arrow-down';
	import QuillLoadingSpin from '~icons/quill/loading-spin';
	import MdiTwitter from '~icons/mdi/twitter';
	import MdiGithub from '~icons/mdi/github';
	import SimpleIconsOsu from '~icons/simple-icons/osu';
	import IcSharpDiscord from '~icons/ic/sharp-discord';
	import MaterialSymbolsMail from '~icons/material-symbols/mail';
	import gsap from 'gsap';
	// import Typewriter from 'svelte-typewriter';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { Typewriter, Text, Set, Wait } from 'typew';
	gsap.registerPlugin(ScrollTrigger);
	let timeline: GSAPTimeline;
	let loaded = false;
	let loadAnimFinished = false;
	let navVisible = false;
	onMount(() => {
		loaded = true;
		timeline = gsap.timeline();
		timeline
			.from('.topText', {
				duration: 1,
				y: -100,
				opacity: 0,
				delay: 0.5,
				ease: 'power4.out',
			})
			.from('.letter', {
				duration: 1,
				y: -100,
				opacity: 0,
				delay: 0,
				stagger: 0.2,
				ease: 'power4.out',
			})
			.from(
				'.subText',
				{
					duration: 1,
					y: -100,
					opacity: 0,
					delay: 0,
					ease: 'power4.out',
				},
				'>-0.5'
			);
		timeline.to('#lettere1', {
			duration: 1,
			color: '#5bcefa',
			ease: 'power4.out',
		});
		timeline.to(
			'#letterm',
			{
				duration: 0.5,
				color: '#f5a9b8',
				ease: 'power4.out',
			},
			'>-0.25'
		);
		timeline.to(
			'#letterb',
			{
				duration: 0.5,
				color: '#fff',
				ease: 'power4.out',
			},
			'>-0.25'
		);
		timeline.to(
			'#lettere2',
			{
				duration: 0.5,
				color: '#f5a9b8',
				ease: 'power4.out',
			},
			'>-0.25'
		);
		timeline.to(
			'#letterd',
			{
				duration: 0.5,
				color: '#5bcefa',
				ease: 'power4.out',
			},
			'>-0.25'
		);

		timeline.from(
			'.social',
			{
				duration: 1,
				y: 100,
				opacity: 0,
				stagger: -0.2,
				delay: 0.5,
				ease: 'power4.out',
				onComplete: () => {
					console.log('fin');
					loadAnimFinished = true;
				},
			},
			'>-0.5'
		);
		timeline.from(
			'#scrollIcon',
			{
				duration: 2.5,
				opacity: 0,
				ease: 'power4.out',
			},
			'>-=1'
		);
		timeline.to('.bothText', {
			opacity: 0,
			duration: 10,
			scrollTrigger: {
				trigger: '.bothText',
				scrub: true,
				pin: true,
				start: '',
				end: '+=500px',
				onEnterBack: () => {
					navVisible = false;
				},
				onLeave: () => {
					navVisible = true;
				},
			},
		});
		onscroll = () => {
			gsap.to('#scrollIcon', {
				duration: 1,
				opacity: 0,
				ease: 'power4.out',
			});
		};
	});
</script>

{#if !loaded}
	<div
		class="z-50 flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
		<QuillLoadingSpin class="h-16 w-16 animate-spin" />
	</div>
{/if}

<div class="h-screen w-screen" class:overflow-hidden={!loadAnimFinished}>
	{#if navVisible}
		<nav
			class="fixed top-0 left-0 z-40 h-20 w-full bg-transparent text-white"
			transition:fade>
			<div class="flex flex-row items-center justify-between px-6 py-4">
				<h1 class="white-shadow navItem text-2xl transition-all">embed</h1>
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
	<main class={`h-[6000vh] w-screen bg-black text-white`}>
		<div class="h-screen w-full">
			<div
				class="bothText flex h-screen w-full flex-col items-center justify-center gap-2 text-center">
				<div class="flex h-full flex-col items-center justify-end">
					<h1 class="topText flex text-6xl">
						<!-- embed -->
						<span class="letter" id="lettere1">e</span>
						<span class="letter" id="letterm">m</span>
						<span class="letter" id="letterb">b</span>
						<span class="letter" id="lettere2">e</span>
						<span class="letter" id="letterd">d</span>
					</h1>
					<h1 class="subText text-3xl">
						{#if loadAnimFinished}
							<Typewriter autoplay loop>
								<Text content="web designer" />
								<Wait duration={3500} />
								<Text content="full stack developer" />
								<Wait duration={3500} />
								<Text content="system administrator" />
								<Wait duration={3500} />
								<Text content="catgirl enthusiast" />
								<Wait duration={3500} />
								<Text content="svelte enjoyer" />
								<Wait duration={3500} />
								<Text content="web developer" />
								<Wait duration={3500} />
							</Typewriter>
						{:else}
							web developer
						{/if}
					</h1>
				</div>
				<div class="flex h-full flex-col items-center justify-between pb-10">
					<div class="flex flex-row justify-around gap-6">
						<a
							href="https://twitter.com/uwunetes"
							class="social"
							target="_blank"
							rel="noreferrer">
							<MdiTwitter
								class="twitter-shadow h-10 w-10 transition-all hover:text-socials-twitter" />
						</a>
						<a
							href="https://github.com/embedvr"
							class="social"
							target="_blank"
							rel="noreferrer">
							<MdiGithub
								class="white-shadow h-10 w-10 transition-all hover:text-socials-github" />
						</a>
						<a
							href="https://osu.ppy.sh/users/embed"
							class="social"
							target="_blank"
							rel="noreferrer">
							<SimpleIconsOsu
								class="osu-shadow h-10 w-10 transition-all hover:text-socials-osu" />
						</a>
						<a
							href="https://discord.id/?prefill=476641014841475084"
							class="social"
							target="_blank"
							rel="noreferrer">
							<IcSharpDiscord
								class="discord-shadow h-10 w-10 transition-all hover:text-socials-discord" />
						</a>
						<a
							href="mailto:brydon@helium.email"
							class="social"
							target="_blank"
							rel="noreferrer">
							<MaterialSymbolsMail
								class="white-shadow h-10 w-10 transition-all hover:text-socials-mail" />
						</a>
					</div>
					<IcOutlineKeyboardArrowDown
						class="h-14 w-14 animate-bounce"
						id="scrollIcon" />
				</div>
			</div>
		</div>
	</main>
</div>
