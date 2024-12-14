import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function RootLayout(){
    return(
    <Tabs>
        <Tabs.Screen name="index" options={{title:'Home'}} />
        <Tabs.Screen name="clock" options={{title:'clock'}} />
        <Tabs.Screen name="calculator" options={{title:'계산기'}} />
        <Tabs.Screen name="piano" options={{title:'피아노'}} />
        <Tabs.Screen name="PhoneBook" options={{title:'전화번호부'}} />
        <Tabs.Screen name="Dice" options={{title:'주사위'}} />
        <Tabs.Screen name="Mult" options={{title:'Mult'}} />
        <Tabs.Screen name="Touchable" options={{title:'Touchable'}} />
    </Tabs>
    );
}
