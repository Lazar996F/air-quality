import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import Card from '../components/Card'
import { citiesData } from '../dummyData'

export default function MainScreen() {
  return (
      <ScrollView style={styles.container}>
      {citiesData.map((cityData, index) => (
        <Card key={index} city={cityData.city} qualityValue={cityData.quality}/>
      ))}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop:50
    },
})
