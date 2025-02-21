import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import ProjectArticPage from "@/pages/ProjectArticPage.vue";
import NotFound from "@/pages/NotFound.vue";

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
  },
  {
    path: "/project",
    name: "Project",
    component: ProjectPage
  },
  {
    path: "/article/:id",
    name: "Article",
    component: ProjectArticPage,
    props: true
  },
  {
    path: "/:pathMatch(.*)*", 
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

