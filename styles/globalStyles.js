import { Dimensions, StyleSheet } from "react-native";
import './globalStyleVariables'


const fullHeight = Dimensions.get('screen').height;


export const globalStyles = StyleSheet.create({
    smallText: {
        fontSize: 15,
        color: '#4f4f4f'
    },
    mediumText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'

    },
    container: {
        flex: 1,
        backgroundColor: global.SecondaryColor,


        height: fullHeight,

    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 29 : 0
    },
})