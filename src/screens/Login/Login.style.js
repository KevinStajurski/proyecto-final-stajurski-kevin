import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        alignItems: 'center',
        marginTop: 100,
    },
    input: {
        backgroundColor: colors.primary,
        margin: 10,
        width: 250
    },
    button: {
        margin: 10,
        fontSize: 18,
        backgroundColor: colors.quaternary,
        borderRadius: 20,
        width: 190,
        textAlign: 'center'
    },
    text: {
        fontSize: 25,
        marginBottom: 50
    }
})