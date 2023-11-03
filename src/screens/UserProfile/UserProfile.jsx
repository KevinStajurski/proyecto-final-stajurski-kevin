import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './UserProfile.style'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'
import { useGetProfileQuery } from '../../services/profilesApi'


const UserProfile = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { data, isLoading } = useGetProfileQuery(user)
    const [profileInfo, setProfileInfo] = useState({})

    useEffect(() => {
        !isLoading && setProfileInfo(Object.values(data))
    }, [isLoading])

    const logout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/cablevideo-58c79.appspot.com/o/userProfile.png?alt=media&token=612a9301-6675-4c57-8219-a2822eaff264&_gl=1*17xmdy6*_ga*ODQwODg0Nzc5LjE2OTgwOTgzNDI.*_ga_CW55HF8NVT*MTY5ODExMTI5My4zLjEuMTY5ODExMTMzNS4xOC4wLjA' }} />
            <Text style={styles.text}>Nombre: {profileInfo[0]?.names}</Text>
            <Text style={styles.text}>Apellido: {profileInfo[0]?.lastName}</Text>
            <Text style={styles.text}>Número de técnico: {profileInfo[0]?.technicianNumber}</Text>
            <Text style={styles.text}>E-mail: {profileInfo[0]?.email}</Text>
            <TouchableOpacity onPress={logout}><Text style={styles.button}>Cerrar sesion</Text></TouchableOpacity>
        </View>
    )
}

export default UserProfile