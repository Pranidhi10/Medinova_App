import { StyleSheet, View } from 'react-native'
import React from 'react'
import Medinova from './Medinova'

const index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Medinova navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default index
