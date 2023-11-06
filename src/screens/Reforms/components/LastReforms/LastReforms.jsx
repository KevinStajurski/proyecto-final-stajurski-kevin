import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGetLastReformsQuery } from '../../../../services/zonesApi'
import styles from './LastReforms.style'

const LastReforms = () => {
    const { data, isLoading, refetch } = useGetLastReformsQuery()

    const update = () => {
        refetch()
    }

    return (
        <View style={styles.container}>
            {isLoading ?
                <Text>Cargando...</Text> :
                !data ? <Text>No hay reformas</Text> :
                    <FlatList
                        data={Object.values(data)}
                        keyExtractor={Math.random}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainer}>
                                <Text>Realizada por: {item.user}</Text>
                                <Text>Descripcion: {item.reformDescription}</Text>
                                <Text>Latitud: {item.location.latitude}</Text>
                                <Text>Longitud: {item.location.longitude}</Text>
                                <Image resizeMode='cover' style={styles.image} source={{ uri: item.reformImage }} />
                            </View>}
                    />
            }
            <TouchableOpacity onPress={update}><Text style={styles.button}>Actualizar</Text></TouchableOpacity>
        </View>
    )
}

export default LastReforms