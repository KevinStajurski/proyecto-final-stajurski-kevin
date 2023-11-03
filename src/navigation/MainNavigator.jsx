import React, { useEffect } from 'react'
import AuthNavigator from './AuthNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useSelector,useDispatch } from 'react-redux'
import { fetchSession } from '../db'
import { setUser } from '../features/auth/authSlice'


const MainNavigator = () => {
    const { user, localId } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession()
                if (session.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])



    return user ? <BottomTabNavigator /> : <AuthNavigator />
}

export default MainNavigator