import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignContent: 'center',
        gap: 10,
        margin: 10,
        backgroundColor: colors.primary,
        padding: 1
    },
    input: {
        width: 200,
        backgroundColor: colors.secondary
    }
})