import { Image, Text, View } from 'react-native'
import React from 'react'
import styles from './Plan.style'

const Plan = ({ route }) => {
    const { city, zone, map } = route.params
    return (
        <View style={styles.container}>
            <Text>{`Plano de la zona ${zone} de la ciudad de ${city}`}</Text>
            <View>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={{
                        uri: map
                    }}
                />
            </View>
        </View>
    )
}

export default Plan