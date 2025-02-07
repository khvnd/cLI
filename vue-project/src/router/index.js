import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage
  },
  {
    path: "/articles",
    name: "Articles",
    component: ArticlesPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

