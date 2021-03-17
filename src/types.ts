import { Component } from 'vue'

export type ButtonType = "Confirm" | "Cancel"

export type VideosType = VideoType[]
export interface VideoType {
    description: string
    duration: string
    imageName: string
    name: string
    percentageComplete: number
    simpleName?: string
}

export type RoutesType = RouteType[]
export interface RouteType {
    component: Component
    name: string
    path: string
    props?: VideoType
}

