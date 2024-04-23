import './assets/main.css'

import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'

import App from './App.vue'

// Views
import HomeView from "@/components/views/HomeView.vue";
import NFLView from "@/components/views/NFLView.vue";
import NBAView from "@/components/views/NBAView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/nfl', component: NFLView },
    { path: '/nba', component: NBAView },
]

const base = import.meta.env.BASE_URL

const router = createRouter({
    history: createWebHashHistory(base),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
