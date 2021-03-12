import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import VideoData from '../assets/videos.json'
import { RoutesType } from '../types'
import { convertToUrl, removeSpecialCharacters } from '../helpers'

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

