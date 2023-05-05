import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store"

type appDispatch = () => AppDispatch
export const useAppDispatch: appDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
