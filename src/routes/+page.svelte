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
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import { Typewriter, Text, Set, Wait } from 'typew';
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	let timeline: GSAPTimeline;
	let loaded = false;
	let loadAnimFinished = true;
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
				end: '+=500px',
				onEnterBack: () => {
					navVisible = false;
				},
				onLeave: () => {
					navVisible = true;
				},
			},
		});
		timeline
			.to('.bigText', {
				scale: 5,
				scrollTrigger: {
					trigger: '.bigText',
					scrub: true,
					start: 'center center',
					end: '+=500px',
				},
			})
			.to('.bigTop', {
				y: -100,
				scrollTrigger: {
					trigger: '.bigText',
					scrub: true,
					start: 'center center',
					end: '+=500px',
				},
			})
			.to('.bigBottom', {
				y: 100,
				scrollTrigger: {
					trigger: '.bigText',
					scrub: true,
					start: 'center center',
					end: '+=500px',
				},
			});
		timeline
			.to('.smallText', {
				scale: 0.25,
				scrollTrigger: {
					trigger: '.smallText',
					scrub: true,
					start: 'center center',
					end: '+=500px',
				},
			})
			.to('.smallTop', {
				y: 25,
				scrollTrigger: {
					trigger: '.smallText',
					scrub: true,
					start: 'center center',
					end: '+=500px',
				},
			})
			.to('.smallBottom', {
				y: -25,
				scrollTrigger: {
					trigger: '.smallText',
					scrub: true,
					start: 'center center',
					end: '+=500px',
				},
			});
		timeline.to('.projectsContainer', {
			y: -100,
			scrollTrigger: {
				trigger: '.projectsContainer',
				pin: true,
				scrub: true,
				start: 'center center',
				end: '+=500px',
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
		<div>
			<div
				class="aboutText flex h-[500px] w-screen flex-col items-center justify-center overflow-y-scroll">
				<h1 class="text-6xl">👋! I'm embed!</h1>
				<h2>I am a full stack web developer from Connecticut, US</h2>
			</div>
			<div class="flex h-[500px] w-screen flex-col items-center justify-center">
				<h1 class="bigTop text-4xl">I build a lot of</h1>
				<h2 class="bigText text-6xl">BIG</h2>
				<h3 class="bigBottom text-4xl">projects</h3>
			</div>
			<div class="flex h-[500px] w-screen flex-col items-center justify-center">
				<h1 class="smallTop text-4xl">and some</h1>
				<h2 class="smallText text-6xl">small</h2>
				<h3 class="smallBottom text-4xl">bots</h3>
			</div>
			<div class="flex h-[500px] w-screen flex-col items-center justify-center">
				<h1 class="text-4xl">but most of all,</h1>
				<h2 class="text-6xl">I build great experiences</h2>
			</div>
		</div>
		<div class="flex w-screen flex-col items-center justify-center px-12 py-24">
			<h1 class="text-6xl">My Skills</h1>
			<div class="flex flex-row justify-center p-4">
				<div
					class="h-40 w-32 rounded-xl border-2 border-neutral-700 bg-neutral-800" />
			</div>
		</div>
		<div
			class="projectsContainer flex h-screen w-screen flex-col justify-around px-12 py-24">
			<h1 class="text-6xl">My Projects</h1>
			<div class="flex flex-row justify-center gap-6">
				<!-- 400 x 300 image placeholder -->
				<div
					class="projectCard flex flex-col items-center justify-center rounded-xl shadow-lg shadow-zinc-900 transition-all hover:-rotate-3 hover:shadow-trans-blue">
					<img
						src="https://via.placeholder.com/300x200"
						alt="placeholder"
						class="w-full rounded-t-xl" />
					<div class="flex w-full flex-col items-start justify-start py-4 px-4">
						<h1 class="text-4xl">Project Name</h1>
						<h2 class="text-xl">Project Description</h2>
					</div>
				</div>
				<div
					class="projectCard flex flex-col items-center justify-center rounded-xl shadow-lg shadow-zinc-900 transition-all hover:rotate-3 hover:shadow-trans-pink">
					<img
						src="https://via.placeholder.com/300x200"
						alt="placeholder"
						class="w-full rounded-t-xl" />
					<div class="flex w-full flex-col items-start justify-start py-4 px-4">
						<h1 class="text-4xl">Project Name</h1>
						<h2 class="text-xl">Project Description</h2>
					</div>
				</div>
				<div
					class="projectCard flex flex-col items-center justify-center rounded-xl shadow-lg shadow-zinc-900 transition-all hover:-rotate-3 hover:shadow-white">
					<img
						src="https://via.placeholder.com/300x200"
						alt="placeholder"
						class="w-full rounded-t-xl" />
					<div class="flex w-full flex-col items-start justify-start py-4 px-4">
						<h1 class="text-4xl">Project Name</h1>
						<h2 class="text-xl">Project Description</h2>
					</div>
				</div>
				<div
					class="projectCard flex flex-col items-center justify-center rounded-xl shadow-lg shadow-zinc-900 transition-all hover:rotate-3 hover:shadow-trans-pink">
					<img
						src="https://via.placeholder.com/300x200"
						alt="placeholder"
						class="w-full rounded-t-xl" />
					<div class="flex w-full flex-col items-start justify-start py-4 px-4">
						<h1 class="text-4xl">Project Name</h1>
						<h2 class="text-xl">Project Description</h2>
					</div>
				</div>
				<div
					class="projectCard flex flex-col items-center justify-center rounded-xl shadow-lg shadow-zinc-900 transition-all hover:-rotate-3 hover:shadow-trans-blue">
					<img
						src="https://via.placeholder.com/300x200"
						alt="placeholder"
						class="w-full rounded-t-xl" />
					<div class="flex w-full flex-col items-start justify-start py-4 px-4">
						<h1 class="text-4xl">Project Name</h1>
						<h2 class="text-xl">Project Description</h2>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
