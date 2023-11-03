import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './Cities.style'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useGetCitiesQuery } from '../../services/zonesApi'

const Cities = ({ navigation }) => {
    const [searching, setSearching] = useState(false)
    const { data, isLoading } = useGetCitiesQuery()
    const [cities, setCities] = useState([])
    !searching && data && (data.map((item) => !cities.includes(item.Ciudad) && cities.push(item.Ciudad)))

    return (
        <View style={styles.container}>
            {isLoading ?
                <Text>Cargando...</Text> :
                <>
                    <SearchInput array={cities} setArray={setCities} placeHolder={'Buscar ciudad'} setSearching={setSearching} />
                    <FlatList data={cities}
                        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Zonas', { city: item })}><Text style={styles.itemList}>{item}</Text></TouchableOpacity>}
                        keyExtractor={() => Math.random()}
                        style={styles.flat} />
                </>
            }
        </View>
    )
}

export default Cities