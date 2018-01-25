import {h} from 'soil-web'

export type TodosFilterFn = (todoItems: h.Input[]) => boolean[]
