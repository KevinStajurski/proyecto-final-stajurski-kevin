import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        alignItems: 'center',
        padding: 50,
    },
    itemList: {
        margin: 10,
        fontSize: 20,
        backgroundColor: colors.quaternary,
        borderRadius: 20,
        width: 170,
        textAlign: 'center'
    }
})