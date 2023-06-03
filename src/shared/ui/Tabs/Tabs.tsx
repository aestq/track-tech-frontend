import { memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Text } from 'shared/ui/Text/Text'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
  content: ReactNode
  value: T
}

interface TabsProps<T extends string> {
  className?: string
  tabs: Array<TabItem<T>>
  value?: string
  onChange?: (tab: TabItem<T>) => void
  label?: string
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    value,
    onChange,
    label
  } = props

  const onClickTab = useCallback((tab: TabItem<T>) => {
    return () => {
      onChange?.(tab)
    }
  }, [onChange])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {label && (
        <Text
          className={cls.label}
          title={label}
          size='xs'
        />
      )}
      <div className={cls.container}>
        {tabs.map(tab => (
          <Card
            className={cls.tab}
            key={tab.value}
            theme={tab.value === value ? 'secondary' : 'border'}
            onClick={onClickTab(tab)}
          >
            {tab.content}
          </Card>
        ))}
      </div>
    </div>
  )
}
