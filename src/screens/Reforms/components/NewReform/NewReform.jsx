import { View, TextInput, Pressable, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usePostReformMutation } from '../../../../services/zonesApi'
import * as ImagePicker from 'expo-image-picker'
import styles from './NewReform.style'
import { useSelector } from 'react-redux'
import * as Location from 'expo-location'
import MyModal from '../../../../components/MyModal/MyModal'

const NewReform = () => {

    const [reformImage, setReformImage] = useState(null)
    const [reformDescription, setReformDescription] = useState('')
    const [location, setLocation] = useState({ latitude: '', longitude: '' })
    const [error, setError] = useState('')
    const [triggerPost] = usePostReformMutation()
    const { user } = useSelector(state => state.auth)
    const [modalVisible, setModalVisible] = useState(false)



    //Permiso de camara
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    //Usar camara
    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                aspect: [9, 16],
                base64: true,
                quality: 0.9
            })
            if (!result.canceled) {
                setReformImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
            }
        }
    }

    //Obtener ubicacion
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setError('El permiso para la localización fue denegado')
            return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLocation({
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude
        })
    }

    //Confirmar (sube los datos a firebase)
    const confirmReform = () => {
        triggerPost({ reformDescription, reformImage, user, location })
        setReformDescription('')
        setReformImage(null)
        setLocation({ latitude: '', longitude: '' })
        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <MyModal text={'Reforma subida con exito!'} modalVisible={modalVisible} setModalVisible={setModalVisible} buttonText={'OK'} />
            <Text style={styles.text}>Agregar reforma / ampliación</Text>
            <TextInput style={styles.textInput} placeholder='Descripción' value={reformDescription} onChangeText={value => setReformDescription(value)} />
            {reformImage && <Image source={{ uri: reformImage }} style={styles.image} />}
            <Pressable onPress={pickImage}>
                <Text style={styles.button}>Agregar foto</Text>
            </Pressable>
            <Pressable onPress={getLocation}>
                <Text style={styles.button}>Obtener coordenadas</Text>
            </Pressable>
            <Text>Latitud: {location.latitude}</Text>
            <Text>Longitud: {location.longitude}</Text>
            <Pressable onPress={confirmReform}>
                <Text style={styles.button}>Enviar</Text>
            </Pressable>
        </View>
    )
}

export default NewReform