import { View, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './SearchInput.style'

const SearchInput = ({ array, setArray, placeHolder, setSearching }) => {

    const [keyword, setKeyword] = useState('')
    const aux = array

    useEffect(() => {
        if (keyword.length != 0) {
            const filtered = array.filter(element => element.includes(keyword))
            setArray(filtered)
            setSearching(true)
        } else {
            setArray(aux)
            setSearching(false)
        }
    }, [keyword])

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={keyword} onChangeText={setKeyword} placeholder={placeHolder} />
        </View>
    )
}

export default SearchInput