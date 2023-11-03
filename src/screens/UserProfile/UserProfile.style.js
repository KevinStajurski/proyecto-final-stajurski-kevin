import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        alignItems: 'center'
    },
    image: {
        marginTop: 40,
        width: 200,
        height: 200,
        marginBottom: 40
    },
    text: {
        margin: 10,
        fontSize: 20
    },
    button: {
        margin: 40,
        fontSize: 20,
        backgroundColor: colors.quaternary,
        borderRadius: 20,
        width: 140,
        textAlign: 'center'
    }
})