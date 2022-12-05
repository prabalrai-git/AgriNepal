import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyles'
import LHeader from '../../components/LandingScreen/LHeader'
import Primaryfeatures from '../../components/LandingScreen/Primaryfeatures'
import SecondaryFeatures from '../../components/LandingScreen/SecondaryFeatures'

const LandingScreen = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <LHeader />
      <Primaryfeatures />
      <SecondaryFeatures />
    </ScrollView>
  )
}

export default LandingScreen