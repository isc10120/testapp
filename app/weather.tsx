import { useEffect, useState } from "react";
import {Text, View, Image, TextInput, ScrollView} from 'react-native';



var st_text = {fontSize:17, padding:1, flex:1};

export default function weather()
{
    const [city, setCity] = useState('Seoul');
    const [cnt, setCnt] = useState(5);
    var url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&cnt="+cnt+"&appid=663107a9eea0feb0299a8b9390e74b04";
    
    const [temp, setTemp] = useState([""]);
    const [weather, setWeather] = useState([""]);
    const [dt, setDt] = useState([""]);
    const [icon, setIcon] = useState([""]);

    useEffect(function() {
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(json){
                console.log(json);

                setTemp([]);
                setWeather([]);
                setIcon([]);
                setDt([]);
                for(var i=0; i<json.cnt; i++){
                    setDt(prev => [...prev, json.list[i].dt_txt])
                    setTemp(prev => [...prev, json.list[i].main.temp]);
                    setWeather(prev => [...prev, json.list[i].weather[0].description]);
                    setIcon(prev =>[...prev, "http://openweathermap.org/img/w/" + json.list[i].weather[0].icon + ".png"]); 
                }
            })
            .catch(function(error){console.error(error);})
    }, [city, cnt]);

    var List = [];
    for(var n=0; n<cnt; n++){
        List.push(<Line i={n}/>)
    }
    
    return(
        <ScrollView style={{margin: 10}}>
            <View style={{flexDirection:'row', paddingVertical:20}}>
                <View style={{flexDirection:'row', flex:1}}>
                    <Text style={{fontSize:20}}>City: </Text>
                    <TextInput style={{borderWidth:1, width:100}} onChangeText={setCity} defaultValue={city}/>
                </View>
                <View style={{flexDirection:'row', flex:1}}>
                    <Text style={{fontSize:20}}>Cnt: </Text>
                    <TextInput style={{borderWidth:1, width:100}} onChangeText={setCnt} defaultValue={cnt}/>
                </View>
            </View>
            {List}
        </ScrollView>
    );

    function Line(props){
        return(
            <View style={{flexDirection:'row', padding:0, marginVertical:5}}>
                <Text style={[st_text,{flex:0.8}]}>{dt[props.i] ? dt[props.i].slice(5,16) : "Loading..."}</Text>
                <Text style={[st_text,{flex:0.6}]}>{temp[props.i]} ℃</Text>
                <Image style={{width:30, height:30}} source={{ uri:icon[props.i]}}/>
                <Text style={st_text}>{weather[props.i]}</Text>                
            </View>
        )
    }
}

