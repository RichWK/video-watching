import { Component } from 'vue'

export type VideosType = VideoType[]
export interface VideoType {
    duration: string
    imageName: string
    name: string
    simpleName?: string
}

export type RoutesType = RouteType[]
export interface RouteType {
    component: Component
    name: string
    path: string
    props?: VideoType
}

