import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './SignUp.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { usePostProfileMutation } from '../../services/profilesApi'
import MyModal from '../../components/MyModal/MyModal'

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
    const [modalVisible, setModalVisible] = useState(false)
    const [errorText, setErrorText] = useState('')


    const onSubmit = () => {
        if (password!=confirmPassword) {
            setModalVisible(true)
            setErrorText('La confirmación de clave no coincide')
            return
        }
        if (names.length == 0 || lastName.length == 0 || technicianNumber.length == 0 || email.length == 0 || password.length == 0) {
            setModalVisible(true)
            setErrorText('Todos los campos son obligatorios')
            return
        }
        triggerSignUp({ email, password })
            .unwrap()
            .then(result => {
                const { localId } = result
                dispatch(setUser(result))
                triggerPost({ names, lastName, technicianNumber, email, password, localId })
            })
            .catch(objet => {
                setErrorText(objet.data.error.message)
                setModalVisible(true)
            })
    }

    return (
        <View>
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} text={errorText} buttonText={'OK'} />
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