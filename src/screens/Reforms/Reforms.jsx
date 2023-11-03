import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Reforms.style'

const Reforms = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Nueva reforma')}><Text style={styles.itemList}>Nueva reforma</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Ultimas reformas')}><Text style={styles.itemList}>Ultimas reformas</Text></TouchableOpacity>
        </View>
    )
}

export default Reforms