import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Login.style'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'
import MyModal from '../../../src/components/MyModal/MyModal'

const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerLogin({ email, password })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken
                })
            })
            .catch(objet => {
                setErrorText(objet.data.error.message)
                setModalVisible(true)
            })
    }

    return (
        <View style={styles.container}>
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} text={errorText} buttonText={'OK'} />
            <TextInput placeholder='E-mail' style={styles.input} value={email} onChangeText={setEmail} />
            <TextInput placeholder='Clave' style={styles.input} value={password} onChangeText={setPassword} />
            <Pressable onPress={onSubmit}>
                <Text style={styles.button}>Iniciar sesión</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Registrarse')}>
                <Text style={styles.button}>Registrarse</Text>
            </Pressable>
        </View>
    )
}

export default Login