import { Text, View, Image, TextInput, ScrollView, Button } from "react-native";
import { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";


var react_logo_src = require('../assets/images/react-logo.png')

var small_img_st = {width:20, height:20}

var text_st = {fontSize:20, margin:10}

export default function App() {
    
  return (
    <ScrollView>
      <Text style={text_st}>Home Screen</Text>
      <Button title="PhoneBook" onPress={function(){router.navigate('/PhoneBook')}}/>
      <View style={{height:10}}/>
      <Button title="CLock" onPress={function(){router.navigate('/clock')}}/>
      <View style={{height:10}}/>
      <Button title="계산기" onPress={function(){router.navigate('/calculator')}}/>
      <View style={{height:10}}/>
      <Button title="피아노" onPress={function(){router.navigate('/piano')}}/>
      <View style={{height:10}}/>
      <Button title="주사위" onPress={function(){router.navigate('/Dice')}}/>
    </ScrollView>
  );
}
