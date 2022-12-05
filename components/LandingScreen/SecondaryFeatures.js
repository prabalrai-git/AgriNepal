import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { globalStyles } from '../../styles/globalStyles';



const width = Dimensions.get('screen').width;


const SecondaryFeatures = () => {


    // secondary features data

    const data = [{ id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 2, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 3, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' }, { id: 1, title: 'मेरो हिसाब', icons: 'hand-coin-outline' },]




    return (
        <View style={{ top: -40, flexDirection: 'row', }}>
            <View style={{ width: width * 0.9, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', borderRadius: 20, elevation: 1.5, shadowColor: '#52006A', flexDirection: 'row', justifyContent: "space-around", flexWrap: 'wrap', marginTop: 15, paddingBottom: 25 }}>


                {
                    data.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ marginTop: 22, width: width * 0.2 }} >
                                <Icon name={item.icons} size={25} color={global.PrimaryColor} style={{ textAlign: 'center' }} />
                                <Text style={[globalStyles.smallText, { textAlign: 'center', marginTop: 10 }]}>{item.title}</Text>

                            </TouchableOpacity>

                        )
                    })
                }

            </View>
        </View>
    )
}

export default SecondaryFeatures