import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { getRoomData } from '../../model/selectors/getRoomData'
import { getRoomError } from '../../model/selectors/getRoomError'
import { getRoomIsLoading } from '../../model/selectors/getRoomIsLoading'
import { fetchRoomsService } from '../../model/services/fetchRoomsService'
import { roomReducer } from '../../model/slice/roomSlice'
import { type Room } from '../../model/types/roomSchema'
import { RoomsItem } from '../RoomsItem/RoomsItem'
import cls from './RoomsList.module.scss'

interface RoomsListProps {
  className?: string
}

const reducersList: ReducersList = {
  room: roomReducer
}

export const RoomsList = memo((props: RoomsListProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const items = useSelector(getRoomData)
  const isLoading = useSelector(getRoomIsLoading)
  const error = useSelector(getRoomError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRoomsService())
  }, [dispatch])

  const render = useCallback((item: Room) => (
    <RoomsItem
      item={item}
      key={item.id}
    />
  ), [])

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className={classNames(cls.RoomsList, {}, [className])}>
      {items?.map(render)}
    </section>
  )
})
