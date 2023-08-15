import React from 'react'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Kvalitet vazduha</Header>
      <Paragraph>
        Informacije o kvalitetu vazduha svima dostupne
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MainScreen')}
      >
        Login
      </Button>
    </Background>
  )
}
