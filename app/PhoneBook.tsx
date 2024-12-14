import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { Text, View, Image, TextInput, ScrollView, Button } from "react-native";

var pbook = [
    {name:'Ewha', phone:1234},
    {name:'June', phone:5678},
    {name:'Jane', phone:2312},
    {name:'Nick', phone:3234}
]

export default function PhoneBook(){

    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [refresh, setrefresh] = useState(0);

    var L = [];

    useEffect(function(){
        init();
    },[])

    async function init() {
        var val = await AsyncStorage.getItem("phonebook")
        if(val != null)
            pbook = JSON.parse(val)
        else
            pbook = []
        setrefresh(refresh+1)
    }

    async function add_item(){
        //pbook = JSON.parse(await AsyncStorage.getItem("phonebook"))
        pbook.push({name: name, phone: phone});
        await AsyncStorage.setItem("phonebook",JSON.stringify(pbook))
        setrefresh(refresh+1);
    }

    async function del_item(){
        //pbook = JSON.parse(await AsyncStorage.getItem("phonebook"))
        pbook.pop();
        await AsyncStorage.setItem("phonebook",JSON.stringify(pbook))
        setrefresh(refresh+1);
    }

    for (var i=0; i<pbook.length; i++){
        L.push(<View style={{flexDirection:"row"}}>
        <View style={{borderWidth:1, margin:2, padding:5, flex:1}}><Text style={{fontSize:20}}>{pbook[i].name}</Text></View>
        <View style={{borderWidth:1, margin:2, padding:5, flex:1}}><Text style={{fontSize:20}}>{pbook[i].phone}</Text></View>
        </View>);
    }
    return (
        <View>
            <Text style={{fontSize:40, margin:10}}>Phone Book</Text>
            <View style={{margin:10, flexDirection:"row"}}>
                <TextInput style={{borderWidth:1, margin:2, padding:5, flex:1}} onChangeText={setname}/>
                <View style={{padding:2}}/>
                <TextInput style={{borderWidth:1, margin:2, padding:5, flex:1}} onChangeText={setphone}/>
                <View style={{padding:3}}/>
                <Button title=" Add " onPress={add_item}/>
                <View style={{padding:3}}/>
                <Button title=" DEL " onPress={del_item}/>
            </View>
            {L}
        </View>
    );
}