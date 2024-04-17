import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Medinova = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Find_dr')
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>MEDINOVA</Text>
      </View>

      <View>
        <Image
          source={require("./dr2.jpg")}
          style={{ width: 430, height: 400, resizeMode: "contain" }} // Adjusted dimensions and resizeMode
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.subheader}>We help patients live a healthy and longer life. </Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum amet architecto, modi odio. Soluta unde ducimus perferendis?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Request an Appointment</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>30+ Years of Experience</Text>
          <Text style={styles.stats}>15+ Specialists</Text>
          <Text style={styles.stats}>100% Clinic Location Patient Satisfaction</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: "contain",
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 2,
    marginTop: 1,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 24,
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsContainer: {
    marginTop: 20,
  },
  stats: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
})

export default Medinova