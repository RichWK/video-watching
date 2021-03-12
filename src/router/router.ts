import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";

import VideoData from '../assets/videos.json'
import { RoutesType } from '../types'

const convertToUrl = ( name: string ): string => {
  return name.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ","-")
}

const removeSpecialCharacters = ( name: string ): string => {
  return name.replaceAll(/[^a-zA-Z0-9 ]/g, "")
}

let routes: RoutesType = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

VideoData.forEach( ( video ) =>
  routes.push(
    { 
      path: '/' + convertToUrl( video.name ),
      name: removeSpecialCharacters( video.name ),
      component: Video
    }
  )
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

