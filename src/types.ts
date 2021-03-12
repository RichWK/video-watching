import { DefineComponent } from 'vue'

export type VideosType = VideoType[]
export interface VideoType {
    duration: string
    imageName: string
    name: string
    simpleName: string
}

export type RoutesType = RouteType[]
export interface RouteType {
    component: DefineComponent<{}, {}, any>
    name: string
    path: string
}

