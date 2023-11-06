import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10
    },
    itemContainer: {
        backgroundColor: colors.secondary,
        margin: 10,
        padding: 10,
        borderRadius: 20,
        gap: 5
    },
    button: {
        margin: 10,
        fontSize: 18,
        backgroundColor: colors.quaternary,
        borderRadius: 20,
        width: 120,
        textAlign: 'center'
    }
})