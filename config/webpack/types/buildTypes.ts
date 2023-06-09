export type Mode = 'development' | 'production'
export type Project = 'frontend' | 'storybook'

export interface BuildEnv {
  mode: Mode
  apiUrl: string
}

export interface Paths {
  entry: string
  output: string
  html: string
  src: string
}

export interface BuildOptions {
  paths: Paths
  isDev: boolean
  mode: Mode
  apiUrl: string
  project: Project
}
