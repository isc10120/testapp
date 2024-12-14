import { Text, View, Image, TextInput, ScrollView, Button } from "react-native";
import { useState } from "react";

function Mult(){
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    return(
        <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
            <TextInput style={{borderWidth:1, margin:2, padding:10, fontSize:40}} onChangeText={setA}/>
            <Text style={{fontSize:40}}> X </Text>
            <TextInput style={{borderWidth:1, margin:2, padding:10, fontSize:40}} onChangeText={setB}/>
            <Text style={{fontSize:40}}> = {A*B}</Text>
        </View>
    )
}

export default function app(){
    return(
        <View>
            <Mult/>
            <Mult/>
            <Mult/>
        </View>
    )
}