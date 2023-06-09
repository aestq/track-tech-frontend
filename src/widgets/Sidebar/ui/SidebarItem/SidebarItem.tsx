import { type ReactElement, type SVGProps } from 'react'
import { type RoutePaths } from 'shared/config/routeConfig/RoutePaths'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Card } from 'shared/ui/Card/Card'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  className?: string
  text: string
  Icon: (props: SVGProps<SVGElement>) => ReactElement
  path: RoutePaths
}

export const SidebarItem = (props: SidebarItemProps) => {
  const {
    className,
    Icon,
    text,
    path
  } = props

  return (
    <AppLink
      className={classNames(cls.SidebarItem, {}, [className])}
      to={path}
    >
      <Card className={cls.card} theme='border'>
        <Icon className={cls.icon}/>
        {text}
      </Card>
    </AppLink>
  )
}
