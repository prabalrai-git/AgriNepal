import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyles'
import '../../styles/globalStyleVariables'
// import Icon from 'react-native-vector-icons/AntDesign'
import Icon from "react-native-vector-icons/AntDesign";



const width = Dimensions.get('screen').width;

const LHeader = () => {
  return (

    <View style={{ width: width, height: 140, backgroundColor: global.PrimaryColor, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
      <View style={globalStyles.droidSafeArea}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.95, marginLeft: 'auto', marginRight: 'auto' }}>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Icon name='user' size={40} color={global.PrimaryColor} style={{ backgroundColor: 'white', borderRadius: 100, padding: 5, marginTop: 10 }} />
            <Text style={[globalStyles.mediumText, { alignSelf: 'center', marginLeft: 8 }]}>
              लग-इन/ दर्ता</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 18, width: width * 0.25, justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Icon name='bells' size={32} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='bars' size={32} color={'white'} />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  )
}

export default LHeader