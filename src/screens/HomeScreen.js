import React from "react";
import { TouchableOpacity } from "react-native";
import {View, Text, StyleSheet, Button, } from "react-native";


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Addy is here</Text>
      <Button 
        onPress={()=> navigation.navigate("Components") }
        title="Go to Component demo"/>
      <Button
        onPress={()=> navigation.navigate("List") }
        title="Go to list demo"/>
      <Button
        onPress={()=> navigation.navigate("Image")}
        title="Go to image screen"/>
      <Button
        onPress={()=> navigation.navigate("Counter")}
        title="Go to counter screen"/>
      <Button
        onPress={()=> navigation.navigate("Color")}
        title="Go to color screen"/>
      <Button
        onPress={()=> navigation.navigate("Square")}
        title="Go to Square screen"/> 
      <Button
        onPress={()=> navigation.navigate("Text")}
        title="Go to Text Demo"/>
      <Button
        onPress={()=> navigation.navigate("Box")}
        title="Go to Text Demo"/>       
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
