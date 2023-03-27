<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import UilMouseAlt from '~icons/uil/mouse-alt';
	import QuillLoadingSpin from '~icons/quill/loading-spin';
	import gsap from 'gsap';
	import Typewriter from 'svelte-typewriter';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	let timeline: GSAPTimeline;
	let loaded = false;
	let loadAnimFinished = false;
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
				onComplete: () => {
					console.log('fin');
					loadAnimFinished = true;
				},
			},
			'>-0.25'
		);
		timeline.from('#scrollIcon', {
			duration: 2.5,
			opacity: 0,
			ease: 'power4.out',
		});
		timeline.to('.bothText', {
			opacity: 0,
			duration: 10,
			scrollTrigger: {
				trigger: '.bothText',
				scrub: true,
				pin: true,
				start: '',
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
					<h1 class="subText text-3xl">web developer</h1>
				</div>
				<div class="flex h-full flex-col items-center justify-end pb-10">
					<UilMouseAlt class="h-14 w-14 animate-bounce" id="scrollIcon" />
				</div>
			</div>
		</div>
		<div class="h-[5000px] w-full bg-white" />
	</main>
</div>
