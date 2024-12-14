import React , {useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';


export default function App(){
    
    const [date, setDate] = useState('')
    const [date1, setDate1] = useState('')
    const [expense, setExpense] = useState('')
    const [memo, setMemo] = useState('')

    var container = {flex:1};
    var box = {margin:20};
    var text = {fontsize:16};
    var datetext = {fontsize:20, marginVertical:10};
    var row_st = {flexDirection:'row', alignItems:'center'};
    var expense_st = {flex:1, borderBottomWidth:1, marginHorizontal:10, fontsize:16, color:'blue'};
    var memo_st = {borderBottomWidth:1, marginTop:10, fontsize:16, color:'blue'}

    async function onDateChange(d:Date){
        var key = d.getFullYear()+" "+(d.getMonth()+1)+" "+d.getDate();
        console.log(key)

        setDate(key)
        setDate1(d.toDateString())

        var value = await AsyncStorage.getItem(key);
        var value_m = await AsyncStorage.getItem(key+"m");

        console.log(value);

        if(value != null){
            setExpense(value)
        }
        else{
            setExpense('')
        }

        if(value_m != null){
            setMemo(value_m)
        }
        else{
            setMemo('')
        }

        var mydata = {date:key,date2:d.toDateString(),expense:value,memo:value_m}
        router.push({pathname:"/memo",params:{token:JSON.stringify(mydata)}})
    }

    async function save_memo(){
        await AsyncStorage.setItem(date, expense)
        await AsyncStorage.setItem(date+'m', memo)
    }

    return(
        <View style={container}>
            <CalendarPicker onDateChange={onDateChange}/>
            {/* <View style={box}>
                <Text style={datetext}> {date1} </Text>
                <View style={row_st}>
                    <Text style={text}>Expense</Text>
                    <TextInput style={expense_st} keyboardType='numeric' 
                    onChangeText={setExpense} value={expense}/>
                    <Button title='SAVE' onPress={save_memo}/>
                </View>
                <TextInput style={memo_st} placeholder='Memo' 
                onChangeText={setMemo} value={memo}/>
            </View> */}
        </View>
    )
}