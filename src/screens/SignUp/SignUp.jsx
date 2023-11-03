import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './SignUp.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { usePostProfileMutation } from '../../services/profilesApi'

const SignUp = ({ navigation }) => {
    const [names, setNames] = useState('')
    const [lastName, setLastName] = useState('')
    const [technicianNumber, setTechnicianNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [triggerSignUp] = useSignUpMutation()
    const dispatch = useDispatch()
    const [triggerPost] = usePostProfileMutation()


    const onSubmit = () => {
        triggerSignUp({ email, password })
            .unwrap()
            .then(result => {
                const { localId } = result
                dispatch(setUser(result))
                triggerPost({ names, lastName, technicianNumber, email, password, localId })
            })
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nombre' value={names} onChangeText={setNames} />
                <TextInput style={styles.input} placeholder='Apellido' value={lastName} onChangeText={setLastName} />
                <TextInput style={styles.input} placeholder='Número de técnico' value={technicianNumber} onChangeText={setTechnicianNumber} />
                <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail} />
                <TextInput style={styles.input} placeholder='Clave' value={password} onChangeText={setPassword} />
                <TextInput style={styles.input} placeholder='Repetir clave' value={confirmPassword} onChangeText={setConfirmPassword} />
                <Pressable onPress={onSubmit}>
                    <Text style={styles.button}>Registrarme</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Iniciar Sesión')}>
                    <Text style={styles.button}>Ya tengo una cuenta</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp