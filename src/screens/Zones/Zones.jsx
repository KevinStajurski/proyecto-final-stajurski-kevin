import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Zones.style'
import { useGetZonesByCitieQuery } from '../../services/zonesApi'

const Zones = ({ navigation, route }) => {
    const { city } = route.params
    const { data, isLoading } = useGetZonesByCitieQuery(city)

    return (
        <View style={styles.container}>
            {isLoading ?
                <Text>Cargando...</Text> :
                <FlatList data={Object.values(data)}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Plano', { city: city, zone: item.Zona, map: item.Mapa })}><Text style={styles.itemList}>{item.Zona}</Text></TouchableOpacity>}
                    keyExtractor={() => Math.random()} />
            }
        </View>
    )
}

export default Zones