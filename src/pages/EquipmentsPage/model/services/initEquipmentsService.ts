import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/Store'
import { equipmentsActions } from 'pages/EquipmentsPage/model/slice/equipmentsSlice'
import { type SortByRoom } from 'features/EquipmentsSortByRoom'
import { type SortByStatus } from 'features/EquipmentsSortByStatus'
import { fetchEquipmentsService } from './fetchEquipmentsService'

export const initEquipmentsService = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'equipments/initEquipmentsService',
  async (searchParams, thunkAPI) => {
    const { dispatch } = thunkAPI
    const search = searchParams.get('search')
    const status = searchParams.get('status')
    const room = searchParams.get('room')

    if(search) {
      dispatch(equipmentsActions.setSearch(search))
    }

    if(status) {
      dispatch(equipmentsActions.setStatus(status as SortByStatus))
    }

    if(room) {
      dispatch(equipmentsActions.setRoom(room as SortByRoom))
    }

    dispatch(fetchEquipmentsService())
  }
)
