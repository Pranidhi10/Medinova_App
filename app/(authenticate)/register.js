import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
    KeyboardAvoidingView,
    TextInput,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { useRouter } from "expo-router";
  import axios from "axios";
  
  
  const register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();
  
    const handleRegister = () => {
      const user = {
          name:name,
          email:email,
          password:password
      } 
  
      axios.post("http://10.24.67.74:8082/register",user).then((response) => {
          console.log(response);
          Alert.alert("Registration successful", "You have been registered successfully");
          setName("");
          setEmail("");
          setPassword("");
      }).catch((error) => {
          Alert.alert("Registration failed", "An error occured while registering");
          console.log("Registration failed",error) 
      });
  
    }
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
      >
        <View>
          <Image
            source={require("./doctor.png")}
            style={{ width: 100, height: 250, resizeMode: "contain" }} // Adjusted dimensions and resizeMode
          />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Register to Your Account
            </Text>
          </View>
  
          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 10,
                //paddingHorizontal: 10,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <Ionicons
                name="person"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: name ? 18 : 18,
                }}
                placeholder="Enter your Name"
              />
            </View>
  
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 10,
                //paddingHorizontal: 10,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 18 : 18,
                }}
                placeholder="Enter your Email"
              />
            </View>
  
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#E0E0E0",
                  paddingVertical: 10,
                  //paddingHorizontal: 10,
                  borderRadius: 5,
                  marginTop: 30,
                }}
              >
                <AntDesign
                  style={{ marginLeft: 8 }}
                  name="lock1"
                  size={24}
                  color="gray"
                />
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 18 : 18,
                  }}
                  placeholder="Enter your Password"
                />
              </View>
            </View>
  
            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Keep me logged in</Text>
  
              <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                Forgot Password
              </Text>
            </View>
  
            <View style={{ marginTop: 80 }} />
  
            <Pressable
              onPress={handleRegister}
              style={{
                width: 200,
                backgroundColor: "#0072b1",
                borderRadius: 6,
                marginLeft: "auto",
                marginRight: "auto",
                padding: 15,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
            </Pressable>
  
            <Pressable
              onPress={() => router.replace("/login")}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
                Already have an Account? Log In
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default register;
  
  const styles = StyleSheet.create({});
  