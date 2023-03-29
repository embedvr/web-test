<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import IcOutlineKeyboardArrowDown from '~icons/ic/outline-keyboard-arrow-down';
	import QuillLoadingSpin from '~icons/quill/loading-spin';
	import MdiTwitter from '~icons/mdi/twitter';
	import MdiGithub from '~icons/mdi/github';
	import SimpleIconsOsu from '~icons/simple-icons/osu';
	import IcSharpDiscord from '~icons/ic/sharp-discord';
	import CarbonLogoSvelte from '~icons/carbon/logo-svelte';
	import SimpleIconsHtml5 from '~icons/simple-icons/html5';
	import CibCss3Shiled from '~icons/cib/css3-shiled';
	import SimpleIconsJavascript from '~icons/simple-icons/javascript';
	import SimpleIconsTailwindcss from '~icons/simple-icons/tailwindcss';
	import SimpleIconsTypescript from '~icons/simple-icons/typescript';
	import VscodeIconsFileTypeDeno from '~icons/vscode-icons/file-type-deno';
	import SimpleIconsCloudflare from '~icons/simple-icons/cloudflare';
	import MaterialSymbolsMail from '~icons/material-symbols/mail';
	import IcRoundKeyboardArrowLeft from '~icons/ic/round-keyboard-arrow-left';
	import IcRoundKeyboardArrowRight from '~icons/ic/round-keyboard-arrow-right';
	import IconoirOpenNewWindow from '~icons/iconoir/open-new-window';
	import gsap from 'gsap';
	// @ts-ignore
	import html2canvas from 'html2canvas';
	// import Typewriter from 'svelte-typewriter';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import { Typewriter, Text, Set, Wait } from 'typew';
	import SkillCard from '../lib/components/SkillCard.svelte';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	let timeline: GSAPTimeline;
	let loaded = false;
	let loadAnimFinished = false;
	let navVisible = false;

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
				stagger: {
					amount: 1,
					from: 'random',
				},
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
			duration: 0.5,
			color: '#5bcefa',
			ease: 'power4.out',
		});
		timeline.to(
			'#letterd',
			{
				duration: 0.5,
				color: '#5bcefa',
				ease: 'power4.out',
			},
			'-=0.5'
		);
		timeline.to('#letterm', {
			duration: 0.5,
			color: '#f5a9b8',
			ease: 'power4.out',
		});
		timeline.to(
			'#lettere2',
			{
				duration: 0.5,
				color: '#f5a9b8',
				ease: 'power4.out',
			},
			'-=0.5'
		);
		timeline.to('#letterb', {
			duration: 0.5,
			color: '#fff',
			ease: 'power4.out',
		});

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
					start: 'center 75%',
					end: '+=500px',
				},
			})
			.to('.bigTop', {
				y: -100,
				scrollTrigger: {
					trigger: '.bigText',
					scrub: true,
					start: 'center 75%',
					end: '+=500px',
				},
			})
			.to('.bigBottom', {
				y: 100,
				scrollTrigger: {
					trigger: '.bigText',
					scrub: true,
					start: 'center 75%',
					end: '+=500px',
				},
			});
		timeline
			.to('.smallText', {
				scale: 0.25,
				scrollTrigger: {
					trigger: '.smallText',
					scrub: true,
					start: 'center 75%',
					end: '+=500px',
				},
			})
			.to('.smallTop', {
				y: 25,
				scrollTrigger: {
					trigger: '.smallText',
					scrub: true,
					start: 'center 75%',
					end: '+=500px',
				},
			})
			.to('.smallBottom', {
				y: -25,
				scrollTrigger: {
					trigger: '.smallText',
					scrub: true,
					start: 'center 75%',
					end: '+=500px',
				},
			});
		timeline.to('.projectHeading', {
			y: -100,
			scrollTrigger: {
				trigger: '.projectHeading',
				pin: true,
				scrub: true,
				start: 'center center',
				end: '+=500px',
			},
		});
		timeline.to('.projectsContainer', {
			// y: -100,
			scrollTrigger: {
				trigger: '.projectsContainer',
				pin: true,
				scrub: true,
				start: 'center center',
				end: '+=1500px',
			},
		});
		const skills = gsap.utils.toArray('.skill');
		skills.forEach((skill) => {
			// @ts-ignore
			gsap.to(skill, {
				y: gsap.utils.random(30, 100),
				x: gsap.utils.random(-300, 300),
				rotate: gsap.utils.random(-45, 45),
				scrollTrigger: {
					trigger: skill,
					scrub: true,
					start: '-=300px bottom',
					end: 'bottom top',
				},
			});
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

<div
	class="h-screen w-screen bg-black text-white"
	class:overflow-hidden={!loadAnimFinished}
	id="contain">
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
	<main class={`h-[6000vh] w-screen bg-transparent`}>
		<div class="h-screen w-full" id="top">
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
				class="aboutText flex h-[500px] w-screen flex-col items-center justify-center overflow-y-scroll text-center">
				<h1 class="text-6xl">👋! I'm embed!</h1>
				<h2 class="text-lg">
					I am a full stack web developer from Connecticut, US
				</h2>
			</div>
			<div
				class="flex h-[500px] w-screen flex-col items-center justify-center text-center">
				<h1 class="bigTop text-4xl">I build a lot of</h1>
				<h2 class="bigText text-6xl">BIG</h2>
				<h3 class="bigBottom text-4xl">projects</h3>
			</div>
			<div
				class="flex h-[500px] w-screen flex-col items-center justify-center text-center">
				<h1 class="smallTop text-4xl">and some</h1>
				<h2 class="smallText text-6xl">small</h2>
				<h3 class="smallBottom text-4xl">bots</h3>
			</div>
			<div
				class="flex h-[500px] w-screen flex-col items-center justify-center text-center">
				<h1 class="text-4xl">but most of all,</h1>
				<h2 class="text-6xl">I build great experiences</h2>
			</div>
		</div>
		<div class="flex w-screen flex-col items-center justify-center px-12 py-24">
			<h1 class="text-6xl">My Skills</h1>
			<div class="flex flex-col justify-center gap-10 p-4">
				<SkillCard class="skill" tech="svelte" />
				<SkillCard class="skill" tech="html" />
				<SkillCard class="skill" tech="css" />
				<SkillCard class="skill" tech="tailwind" />
				<SkillCard class="skill" tech="js" />
				<SkillCard class="skill" tech="ts" />
				<SkillCard class="skill" tech="deno" />
				<SkillCard class="skill" tech="cfw" />
				<SkillCard class="skill" tech="djs" />
			</div>
			<div
				class="projectHeading flex h-screen w-screen flex-col items-center justify-center px-12 py-24">
				<h2 class="text-4xl">Take a look at</h2>
				<h3 class="text-5xl">some</h3>
				<h4 class="text-4xl">of my previous work</h4>
			</div>
			<div
				class="projectsContainer flex h-screen w-screen items-center justify-center px-12 py-24">
				<div class="py-23 grid h-full w-full grid-cols-4 grid-rows-2 gap-4">
					<ProjectCard
						name="Bubblez"
						image="/assets/bubblez.png"
						hoverImage="/assets/bubblez.webp"
						tech={['svelte', 'ts', 'tailwind', 'cfw']}
						class="col-span-2 row-span-2"
						link="https://next.bubblez.app" />
					<ProjectCard
						name="WhitelistSMP"
						image="/assets/whitelist.png"
						hoverImage="/assets/whitelist.webp"
						tech={['svelte', 'ts', 'tailwind', 'cfw']}
						class="col-span-1 row-span-1"
						link="https://whitelistsmp.net" />
					<ProjectCard
						name="| I"
						image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGD4DwABBAEAwS2OUAAAAABJRU5ErkJggg=="
						hoverImage="https://via.placeholder.com/800x700"
						tech={['svelte', 'ts']}
						class="col-span-1 row-span-1"
						link="https://example.com"
						code="https://example.org" />
					<ProjectCard
						name="| |"
						image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGD4DwABBAEAwS2OUAAAAABJRU5ErkJggg=="
						hoverImage="https://via.placeholder.com/800x700"
						tech={['svelte', 'ts']}
						class="col-span-1 row-span-1"
						link="https://example.com"
						code="https://example.org" />
					<ProjectCard
						name="| _"
						image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGD4DwABBAEAwS2OUAAAAABJRU5ErkJggg=="
						hoverImage="https://via.placeholder.com/800x700"
						tech={['svelte', 'ts']}
						class="col-span-1 row-span-1"
						link="https://example.com"
						code="https://example.org" />
				</div>
			</div>
		</div>
	</main>
</div>
