import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBreadcrumbs from 'vue-2-breadcrumbs';

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);

const Feeds = { template: '<div><router-view/></div>' };
const Feed = { template: '<div><h2>Feed</h2></div>' };
const Biz = { template: '<div><h2>Feeds</h2></div>' };
const Foo = { template: '<div><h2>Foo</h2></div>' };
const Bar = { template: '<div><h2>Bar</h2></div>' };
const Baz = { template: '<div><h2>Baz</h2></div>' };

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
                    path: '',
                    component: Biz
                },
                {
                    path: 'foo',
                    component: Foo,
                    meta: {
                        breadcrumb: () => `foo ${1 + 1}`
                    }
                },
                {
                    path: 'bar',
                    component: Bar,
                    meta: {
                        breadcrumb: 'bar'
                    }
                },
                {
                    name: 'baz',
                    path: 'baz',
                    component: Baz,
                    meta: {
                        breadcrumb: function () {
                            const { name } = this.$route;
                            return `name "${name}" of context $route`;
                        }
                    }
                },
                {
                    path: ':id',
                    component: Feed,
                    meta: {
                        breadcrumb: params => `Other Feed ${params.id}`
                    }
                }
            ]
        }
    ]
});

new Vue({
    router,
    template: `
        <div id="app" class="container">
            <ul class="nav">
                <li class="nav-item  dropdown">
                    <router-link to="/feeds" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Feeds</router-link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link to="/feeds/foo" class="dropdown-item">Foo</router-link>
                        <router-link to="/feeds/bar" class="dropdown-item">Bar</router-link>
                        <router-link to="/feeds/baz" class="dropdown-item">Baz</router-link>
                        <router-link to="/feeds/1" class="dropdown-item">Other Feed 1</router-link>
                        <router-link to="/feeds/2" class="dropdown-item">Other Feed 2</router-link>
                        <router-link to="/feeds/3" class="dropdown-item">Other Feed 3</router-link>
                    </div>
                </li>
            </ul>
            <breadcrumbs/>
            <router-view/>
        </div>
    `
}).$mount('#app');
