import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const doctors = [
  { name: 'Dr. Alfaz Ahmed', specialization: 'Surgeon' },
  { name: 'Dr. Saleh Mahmud', specialization: 'Neurologist' },
  { name: 'Dr. Farid Uddin', specialization: 'Dermatologist' },
  { name: 'Dr. Ba', specialization: 'Not specified' },
  { name: 'Dr. Sherin Jacob', specialization: 'Cardiologist' },
];

const DoctorItem = ({ doctor }) => (
  <TouchableOpacity style={styles.doctorItem}>
    <Text style={styles.doctorName}>{doctor.name}</Text>
    <Text style={styles.doctorSpecialization}>{doctor.specialization}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <Text style={styles.title}>Find a Doctor</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <View style={styles.doctorList}>
        {filteredDoctors.map((doctor, index) => (
          <DoctorItem key={index} doctor={doctor} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 20,
    marginBottom: 20,
    position: 'absolute', // Position the logo absolutely
    top: 20, // Adjust as needed to create space from the top
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  doctorList: {
    width: '100%',
  },
  doctorItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialization: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;
