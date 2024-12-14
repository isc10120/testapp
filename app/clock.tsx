import { Text, View, Image, TextInput, ScrollView, Button } from "react-native";
import { useState, useEffect } from "react";

var text_st = {fontSize:20, margin:10};

export default function clock(){
    const [hh, sethh] = useState('');
    const [mm, setmm] = useState('');
    const [ss, setss] = useState('');
    const [ap, setap] = useState('');

    useEffect(function(){
        setInterval(()=>{var now=new Date();
                        let h = now.getHours();
                        let m = now.getMinutes();
                        let s = now.getSeconds();
                        if(h<12) setap('am');
                        else {setap('pm');h%=12;}
                        if(h<10)sethh('0'+h);
                        else sethh(''+h);
                        if(m<10)setmm('0'+m);
                        else setmm(''+m);
                        if(s<10)setss('0'+s);
                        else setss(''+s);
                        }, 1000);},[]);
    
    return(
        <View>
            <Text style={text_st}>{hh}:{mm}:{ss} {ap}</Text>
        </View>
    )
}