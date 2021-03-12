import { DefineComponent } from 'vue'

export type VideosType = VideoType[]
export interface VideoType {
    name: string
    duration: string
    imageName: string
}

export type RoutesType = RouteType[]
export interface RouteType {
    path: string
    name: string
    component: DefineComponent<{}, {}, any>
}

