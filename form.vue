<template>
  	<form v-on:submit.prevent="onSend" accept-charset="utf-8">

		<input type="text" name="username" v-model="username">
		<input type="submit" value="submit">
		<p>{{ data | json }}</p>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				username: null
			}
		},
		methods: {
			onSend: function () {
				this.$http.post('http://all-p.ru/test.php', this.$data, {emulateJSON: true}).then(function(response) {
					console.log('success')
					console.log(response)
				}, function(response) {
					console.log('error')
					console.log(response)
				})
			}
		}
	}
</script>