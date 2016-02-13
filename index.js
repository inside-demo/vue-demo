import Vue from 'vue';
import http from 'vue-resource';

Vue.use(http);

new Vue({
	el: '#demo',
	data: {
		message: 'Hello Vue.js!'
	},
	components: {
		helper: require('./helper.vue'),
		forms: require('./form.vue')
	}
});
