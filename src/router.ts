import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Video from "./views/Video.vue";
import VideoData from './assets/videos.json'
import { RoutesType } from './types'
import { convertToUrl, removeSpecialCharacters } from './helpers'

let routes: RoutesType = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

VideoData.forEach( ( video ) =>
  routes.push(
    { 
      path: '/' + convertToUrl( video.name ),
      name: removeSpecialCharacters( video.name ),
      component: Video,
      props: video
    }
  )
);

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
    scrollBehavior( to, from, savedPosition ) {
      return savedPosition ? savedPosition : { left: 0, top: 0 }
    }
  }
);

export default router;

