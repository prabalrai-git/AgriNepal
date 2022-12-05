import { View, Text, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { globalStyles } from '../../styles/globalStyles';
import "../../styles/globalStyleVariables"

const width = Dimensions.get('screen').width;

const Primaryfeatures = () => {

    // Primary fetures data

    const data = [{ id: 1, title: 'मेरो खेत', icon: 'grid' }, { id: 2, title: 'ऋण सेवा', icon: 'hand-coin-outline' }, { id: 3, title: 'बीमा सेवा', icon: 'safe' }, { id: 4, title: 'मेरो हिसाब', icon: 'calculator-variant-outline' }]







    return (
        <View style={{ top: -40, flexDirection: 'row', }}>
            <View style={{ width: width * 0.9, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', borderRadius: 20, elevation: 1.5, shadowColor: '#52006A', flexDirection: 'row', justifyContent: "space-around", paddingBottom: 5 }}>


                {
                    data.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={{ marginTop: 20, width: width * 0.25 }} >
                                <Icon name={item.icon} size={25} color={'black'} style={{ textAlign: 'center', marginBottom: 8 }} />
                                <Text style={[globalStyles.smallText, { textAlign: 'center' }]}>{item.title}</Text>

                            </TouchableOpacity>

                        )
                    })
                }

            </View>
        </View>
    )
}

export default Primaryfeatures