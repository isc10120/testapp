import React , {useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Memo(){
    const mydata = useLocalSearchParams();

    var getdata = JSON.parse(mydata.token)

    const [date, setDate] = useState(getdata.date)
    const [date1, setDate1] = useState(getdata.date2)
    const [expense, setExpense] = useState(getdata.expense)
    const [memo, setMemo] = useState(getdata.memo)

    var container = {flex:1};
    var box = {margin:20};
    var text = {fontsize:16};
    var datetext = {fontsize:20, marginVertical:10};
    var row_st = {flexDirection:'row', alignItems:'center'};
    var expense_st = {flex:1, borderBottomWidth:1, marginHorizontal:10, fontsize:16, color:'blue'};
    var memo_st = {borderBottomWidth:1, marginTop:10, fontsize:16, color:'blue'}

    async function save_memo(){
        console.log(date+" 에 저장")
        console.log(getdata.date)
        await AsyncStorage.setItem(date, expense)
        await AsyncStorage.setItem(date+'m', memo)
        router.navigate('/Calendar')
    }

    return(
        <View style={container}>
            <Text style={datetext}> {date1} </Text>
            <View style={row_st}>
                <Text style={text}>Expense</Text>
                <TextInput style={expense_st} keyboardType='numeric' 
                onChangeText={setExpense} value={expense}/>
                <Button title='SAVE' onPress={save_memo}/>
            </View>
            <TextInput style={memo_st} placeholder='Memo' 
            onChangeText={setMemo} value={memo}/>
        </View>
    )
}