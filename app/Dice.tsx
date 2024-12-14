import { Text, View, TouchableOpacity, TextInput, ScrollView, Button } from "react-native";
import { useState } from "react";

var st_circle = {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgb(0, 200, 255)",
    borderWidth: 1
};

var st_dice = {
    backgroundColor: 'rgb(255, 240, 200)',
    padding: 10
};

var st_text = {
    textAlign: 'center',
    fontSize: 20,
    margin: 5
};

export default function diceapp(){

    const [N, setN] = useState(1);

    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={st_text}>Dice {N}</Text>
            <TouchableOpacity onPress={function(){ setN(Math.floor(Math.random()*6+1)); }}>
                <Dice num={N}/> 
            </TouchableOpacity>
        </View>
    )
}

function Circle(){
    return <View style={st_circle}/>
}

function Blank(){
    return <View style={[st_circle, {backgroundColor: undefined, borderWidth: 0}]}/>
}

function Dice(props){
    if(props.num==1)
        return(
            <View style={st_dice}>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
            </View>
        )
    else if(props.num==2)
        return(
            <View style={st_dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
            </View>
        )
    else if(props.num==3)
        return(
            <View style={st_dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
            </View>
        )
    else if(props.num==4)
        return(
            <View style={st_dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            </View>
        )
    else if(props.num==5)
        return(
            <View style={st_dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            </View>
        )
    else if(props.num==6)
        return(
            <View style={st_dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            </View>
        )
}
