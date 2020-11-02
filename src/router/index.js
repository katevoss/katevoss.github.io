import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
