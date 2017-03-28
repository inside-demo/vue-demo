import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './home.vue';
import VueBreadcrumbs from 'vue2-breadcrumbs';

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);

const Feeds = { template: '<div><h1>Feeds</h1> <router-view/></div>' };
const Foo = { template: '<div><h2>foo</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptate quia quas assumenda beatae vero? Omnis, praesentium. Magni nesciunt alias eligendi suscipit vel dolor accusantium, itaque possimus nulla maiores nostrum.</p></div>' };
const Bar = { template: '<div><h2>Bar</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptate quia quas assumenda beatae vero? Omnis, praesentium. Magni nesciunt alias eligendi suscipit vel dolor accusantium, itaque possimus nulla maiores nostrum.</p></div>' };

const router = new VueRouter({
  routes: [
  	{ path: '/', redirect: '/feeds' },
    {
    	path: '/feeds',
    	component: Feeds,
    	meta: {
	      breadcrumb: 'Feeds'
	    },
    	children: [
    		{
    			path: 'foo',
    			component: Foo,
		    	meta: {
			      breadcrumb: 'foo'
			    }
    		},
    		{
    			path: 'bar',
    			component: Bar,
		    	meta: {
			      breadcrumb: 'bar'
			    }
    		}
    	]
    }
  ]
});

new Vue({
  router,
  components: {
    Home: Home
  },
  template: `
    <div id="app" class="container">
      <ul class="nav">
        <li class="nav-item  dropdown">
        	<router-link to="/feeds" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Feeds</router-link>
        	<div class="dropdown-menu">
				<router-link to="/feeds/foo" class="dropdown-item">Foo</router-link>
				<router-link to="/feeds/bar" class="dropdown-item">Bar</router-link>
        	</div>
        </li>
      </ul>
      <breadcrumbs/>
      <router-view/>
      <hr>
      <Home/>
    </div>
  `
}).$mount('#app')
