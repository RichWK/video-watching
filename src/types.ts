// Contains all the types used throughout the app, ready to be imported elsewhere.
// For example:

export type timeOfDayType = 'dawn' | 'morning' | 'afternoon' | 'dusk' | 'night'

export type VideosType = VideoType[]

export interface VideoType {
    name: string
    duration: string
    imageName: string
}

