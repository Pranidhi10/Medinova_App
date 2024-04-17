import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>

      <View style={styles.service}>
        <Text style={styles.serviceName}>Primary Care</Text>
        <Text style={styles.serviceDescription}>
          We provide comprehensive primary care services for adults and children.
        </Text>
      </View>

      <View style={styles.service}>
        <Text style={styles.serviceName}>Specialty Care</Text>
        <Text style={styles.serviceDescription}>
          We offer specialty care services in various fields, including cardiology,
          dermatology, and neurology.
        </Text>
      </View>

      <View style={styles.service}>
        <Text style={styles.serviceName}>Diagnostic Services</Text>
        <Text style={styles.serviceDescription}>
          We provide diagnostic services, including laboratory tests and imaging
          studies.
        </Text>
      </View>

      <View style={styles.service}>
        <Text style={styles.serviceName}>Surgical Services</Text>
        <Text style={styles.serviceDescription}>
          We offer a wide range of surgical services, from minimally invasive
          procedures to complex surgeries.
        </Text>
      </View>

      <View style={styles.service}>
        <Text style={styles.serviceName}>Rehabilitation Services</Text>
        <Text style={styles.serviceDescription}>
          We provide rehabilitation services, including physical therapy,
          occupational therapy, and speech therapy.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  service: {
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
});