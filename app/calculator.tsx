import { Text, View, Image, TextInput, ScrollView, Button } from "react-native";
import { useState } from "react";


var text_st = {fontSize:30, backgroundColor:'lightgray', padding:10, margin:10, width:300}
var subtitle_st = {fontSize: 25, margin: 5, alignSelf:'flex-start'}

export default function calculator(){
    const [A, setA] = useState(1)
    const [B, setB] = useState(1)
  
    const [buffer, setbuffer] = useState(0)
    const [pre, setpre] = useState(0)
    const [op, setop] = useState('')
   
    var res = 0;
    const [show, setshow] = useState('')

    var opPressed = false;

    function pressNum(x: number){
        setbuffer(buffer*10+x);
        setshow(show+x);
    }

    function pressOP(x: string){
        setpre(buffer); 
        setop(x);
        setshow(show+x);
        setbuffer(0);
    }

    function getResult(){
        switch(op){
            case '+': res = pre + buffer; break;
            case '-': res = pre - buffer; break;
            case 'x': res = pre * buffer; break;
            case '/': res = pre / buffer; break;
            default: res=1;
        }
        setshow(show+'='+res);
    }

    return(
        <ScrollView>
        
        <View style={{alignItems:'center', margin:30}}>
            <Text style={subtitle_st}>구구단:</Text>
            <View style={{margin:10, flexDirection:"row"}}>
                <Text style={text_st}>{A} X {B} = {A*B}</Text>
            </View>
            <View style={{margin:10, flexDirection:"row"}}>
                <Button title=" + " onPress={ function(){setA(A + 1)} }/>
                <View style={{width:20}}></View>
                <Button title=" + " onPress={ function(){setB(B + 1)} }/>
            </View>
            <View style={{margin:10, flexDirection:"row"}}>
                <Button title=" - " onPress={ function(){setA(A - 1)} }/>
                <View style={{width:20}}></View>
                <Button title=" - " onPress={ function(){setB(B - 1)} }/>
            </View>
        </View>

      <View style={{alignItems:'center', margin:30}}>
        <Text style={subtitle_st}>계산기:</Text>
        <View style={{margin:10, flexDirection:"row"}}>
          <Text style={text_st}>{show}</Text>
        </View>
        <View style={{margin:10, flexDirection:"row"}}>
          <Button title=" 1 " onPress={ function(){pressNum(1)} }/>
          <View style={{width:10}}/>
          <Button title=" 2 " onPress={ function(){pressNum(2)} }/>
          <View style={{width:10}}/>
          <Button title=" 3 " onPress={ function(){pressNum(3)} }/>
          <View style={{width:10}}/>
          <Button title=" 4 " onPress={ function(){pressNum(4)} }/>
          <View style={{width:10}}/>
          <Button title=" 5 " onPress={ function(){pressNum(5)} }/>
        </View>
        <View style={{margin:10, flexDirection:"row"}}>
          <Button title=" 6 " onPress={ function(){pressNum(6)} }/>
          <View style={{width:10}}/>
          <Button title=" 7 " onPress={ function(){pressNum(7)} }/>
          <View style={{width:10}}/>
          <Button title=" 8 " onPress={ function(){pressNum(8)} }/>
          <View style={{width:10}}/>
          <Button title=" 9 " onPress={ function(){pressNum(9)} }/>
          <View style={{width:10}}/>
          <Button title=" 0 " onPress={ function(){pressNum(0)} }/>
        </View>
        <View style={{margin:10, flexDirection:"row"}}>
          <Button title=" + " onPress={ function(){pressOP('+')} }/>
          <View style={{width:20}}></View>
          <Button title=" - " onPress={ function(){pressOP('-')} }/>
          <View style={{width:20}}></View>
          <Button title=" x " onPress={ function(){pressOP('x')} }/>
          <View style={{width:20}}></View>
          <Button title=" / " onPress={ function(){pressOP('/')} }/>
          <View style={{width:30}}></View>
          <Button title=" = " onPress={ getResult }/>
        </View>
      </View>
      </ScrollView>
    )
}