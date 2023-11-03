import { StyleSheet } from "react-native";
import {colors} from '../../../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        alignItems: 'center',
        padding: 30
    },
    image: {
        width: 400,
        height: 400
    },
    button: {
        margin: 10,
        fontSize: 18,
        backgroundColor: colors.quaternary,
        borderRadius: 20,
        width: 200,
        textAlign: 'center'
    },
    textInput: {
        height: 100,
        width: 400,
        backgroundColor: colors.secondary,
        margin: 10
    },
    text: {
        fontSize: 20
    }
})