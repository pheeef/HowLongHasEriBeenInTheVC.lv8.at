<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import updateLocale from 'dayjs/plugin/updateLocale';
	import duration from 'dayjs/plugin/duration';

	dayjs.extend(relativeTime);
	dayjs.extend(updateLocale);
	dayjs.extend(duration);

	let now = dayjs();
	const startTime = dayjs('2022-09-13T17:00:00.000Z');

	let nowUnix = now.unix();
	const startTimeUnix = startTime.unix();

	let difference = nowUnix - startTimeUnix;

	let newdate;

	function calcDiff() {
		now = dayjs();
		nowUnix = now.unix();

		//console.log("Unix Now", nowUnix)
		//console.log("Unix Then", startTimeUnix)

		difference = nowUnix - startTimeUnix;
		//console.log("Difference", difference)

		newdate = dayjs.duration(difference, 's');
		//console.log(newdate)
	}

	$: calcDiff();

	setInterval(() => {
		calcDiff();
	}, 1000);
</script>

<main class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex flex-col justify-items-center justify-center gap-10">
    <h1 class="text-7xl text-white">Eri has been in the VC for:</h1>
	<div class="grid grid-flow-col gap-5 text-center auto-cols-max flex flex-row justify-center">
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
    <h2 class="text-center">Made with ❤️ by Pheeef</h2>
</main>

