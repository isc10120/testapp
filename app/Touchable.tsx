import { Text, View, TouchableHighlight, TouchableNativeFeedback} from "react-native";
import { useState } from "react";

var text_st = { fontSize:30, padding:10, margin:10 };

export default function app(){
    const [N, setN] = useState(0);

    return(
        <View style={{flex:1, alignItems:'center'}}>
            <Text style={text_st}> Touched {N} times</Text>

            <TouchableHighlight underlayColor='orange' onPress={function(){setN(N+1)}}>
                <View>
                    <Text style={[text_st, {color:'dodgerblue'}]}> High, Touch me </Text>
                </View>
            </TouchableHighlight>

            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#2196F3')}
                                        onPress={function(){setN(N-1)}}>
                <View>
                    <Text style={[text_st, {color:'dodgerblue'}]}> High, Touch me </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

    )
}