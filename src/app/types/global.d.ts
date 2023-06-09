declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import { type ReactElement, type SVGProps } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'frontend' | 'storybook'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T
