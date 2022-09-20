<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import updateLocale from 'dayjs/plugin/updateLocale';
	import duration from 'dayjs/plugin/duration';

	import { leaderboard } from "../leaderboard"
    import LDBR from "../components/LDBR.svelte"


	import { goto } from '$app/navigation';

	dayjs.extend(relativeTime);
	dayjs.extend(updateLocale);
	dayjs.extend(duration);

	let now = dayjs('2022-09-20T20:09:00.000Z');
	const startTime = dayjs('2022-09-13T17:00:00.000Z');
	let newdate: duration.Duration;

	let nowUnix = now.unix();
	const startTimeUnix = startTime.unix();

	let difference = nowUnix - startTimeUnix;

	newdate = dayjs.duration(difference, 's')


	// function calcDiff() {
	// 	now = dayjs();
	// 	nowUnix = now.unix();

	// 	//console.log("Unix Now", nowUnix)
	// 	//console.log("Unix Then", startTimeUnix)

	// 	difference = nowUnix - startTimeUnix;
	// 	//console.log("Difference", difference)

	// 	newdate = dayjs.duration(difference, 's');
	// 	//console.log(newdate)
	// }

	// $: calcDiff();

	// setInterval(() => {
	// 	calcDiff();
	// }, 100);


</script>
<main class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex flex-col justify-items-center justify-center gap-10">
    <h1 class="text-7xl text-gray-700 dark:text-white">Eri was in the VC for:</h1>
	<div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
		<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			<span class="countdown font-mono text-5xl">
				<span style="--value:{newdate.days()};" />
			</span>
			days
		</div>
		<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			<span class="countdown font-mono text-5xl">
				<span style="--value:{newdate.hours()};" />
			</span>
			hours
		</div>
		<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			<span class="countdown font-mono text-5xl">
				<span style="--value:{newdate.minutes()};" />
			</span>
			min
		</div>
		<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			<span class="countdown font-mono text-5xl">
				<span style="--value:{newdate.seconds()};" />
			</span>
			sec
		</div>
	</div>
	<h2 class="text-5xl text-gray-700 dark:text-white text-center">Leaderboard</h2>
	<div class="leaderboards flex gap-5 flex-col" >
		{#each leaderboard as entry}
         	<LDBR {...entry} />
    	{/each}
	</div>


    <h2 class="text-center">v1.0.3 ~ Made with ❤️ by <span class="link" on:click={async () => await goto("/rickroll")}>Pheeef</span></h2>
</main>

<style lang="postcss">
	.link{
		@apply text-purple-400;
	}

	.link:hover{
		@apply text-purple-600;
	}
</style>