<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import updateLocale from 'dayjs/plugin/updateLocale';
	import duration from 'dayjs/plugin/duration';

	export let name: string; // Name of the Account
	export let profilePictureURL: string; // Profile Picture URL from Discord CDN
	export let timeStarted: string; // Timestamp of the beginning in UCT+0 (GMT)
	export let timeEnded: string; // Timestamp of the end in UCT+0 (GMT)
	
	dayjs.extend(relativeTime);
	dayjs.extend(updateLocale);
	dayjs.extend(duration);

	let now = dayjs(timeStarted);
	const startTime = dayjs(timeEnded);
	let newdate: duration.Duration;

	let nowUnix = now.unix();
	const startTimeUnix = startTime.unix();

	let difference = nowUnix - startTimeUnix;

	newdate = dayjs.duration(difference, 's')
</script>

<div class="stat bg-gray-800 rounded-3xl ">
	<div class="stat-figure text-secondary">
		<div class="avatar">
			<div class="w-24 rounded-full">
				<img src="{profilePictureURL}" />
			</div>
		</div>
	</div>
	<div class="stat-value text-white">{name}</div>
	<div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-start mt-4">
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
</div>