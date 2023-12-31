import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo-vector.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    height: 110,
    marginBottom: 8,
  },
})