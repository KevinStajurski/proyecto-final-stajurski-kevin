import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemList: {
        margin: 10,
        fontSize: 20,
        backgroundColor: colors.quaternary,
        borderRadius: 20,
        width: 40,
        textAlign: 'center'
    }
})