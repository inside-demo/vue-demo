<template>
	<div class="helper">helper {{ msg }}</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'red'
			}
		}
	}
</script>

<style>
	.helper {
		color: red;
	}
</style>