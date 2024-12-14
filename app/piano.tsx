import {View, Button, Text, ImageBackground} from 'react-native';
import {Audio} from 'expo-av';
import { useState } from 'react';

var key_st = {flex:1, margin:5, backgroundColor:'rgba(100,100,100,0.2)'};

export default function piano(){

    const [k00, setk00] = useState(0);
    const [k02, setk02] = useState(0);
    const [k04, setk04] = useState(0);
    const [k05, setk05] = useState(0);
    const [k07, setk07] = useState(0);
    const [k09, setk09] = useState(0);
    const [k11, setk11] = useState(0);
    const [k12, setk12] = useState(0);

    return(
        <View style={{flex:1}}>
            <ImageBackground style={{width:'100%', height:'100%'}}
                resizeMode='stretch' source={require('../assets/keyfiles/keyboard.png')}>
                <View style={[key_st, {opacity: k00}]}
                    onTouchStart={function(){play('00'); setk00(1);}}
                    onTouchEnd={function(){setk00(0);}}/>
                <View style={[key_st, {opacity: k02}]}
                    onTouchStart={function(){play('02'); setk02(1);}}
                    onTouchEnd={function(){setk02(0);}}/>
                <View style={[key_st, {opacity: k04}]}
                    onTouchStart={function(){play('04'); setk04(1);}}
                    onTouchEnd={function(){setk04(0);}}/>
                <View style={[key_st, {opacity: k05}]}
                    onTouchStart={function(){play('05'); setk05(1);}}
                    onTouchEnd={function(){setk05(0);}}/>
                <View style={[key_st, {opacity: k07}]}
                    onTouchStart={function(){play('07'); setk07(1);}}
                    onTouchEnd={function(){setk07(0);}}/>
                <View style={[key_st, {opacity: k09}]}
                    onTouchStart={function(){play('09'); setk09(1);}}
                    onTouchEnd={function(){setk09(0);}}/>
                <View style={[key_st, {opacity: k11}]}
                    onTouchStart={function(){play('11'); setk11(1);}}
                    onTouchEnd={function(){setk11(0);}}/>
                <View style={[key_st, {opacity: k12}]}
                    onTouchStart={function(){play('12'); setk12(1);}}
                    onTouchEnd={function(){setk12(0);}}/>
            </ImageBackground>
        </View>
    )
}

async function play(num:string) {
    console.log(`Loading Sound ${num}`);
    var s = await Audio.Sound.createAsync(soundFiles[num]);

    console.log('Playing Sound '+ num);
    s.sound.playAsync();
}

const soundFiles: {[key:string]:any} = {
    '00': require('../assets/keyfiles/note00.m4a'),
    '02': require('../assets/keyfiles/note02.m4a'),
    '04': require('../assets/keyfiles/note04.m4a'),
    '05': require('../assets/keyfiles/note05.m4a'),
    '07': require('../assets/keyfiles/note07.m4a'),
    '09': require('../assets/keyfiles/note09.m4a'),
    '11': require('../assets/keyfiles/note11.m4a'),
    '12': require('../assets/keyfiles/note12.m4a'),
};
