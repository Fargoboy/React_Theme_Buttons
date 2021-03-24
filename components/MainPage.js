import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {useBackgroundTheme, useToggleBackgroundTheme,buttonstyles,buttonscolors} from './BackGroundTheme'


export default function MainPage(){

    const backgroundTheme = useBackgroundTheme()
    const toggleTheme = useToggleBackgroundTheme()

    const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: backgroundTheme,
        flexDirection: "column",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
    }})

    

    
    return(

  

        <View style={styles.containerStyle}>
           
        <View style={buttonstyles}>   
        
        <Button style={buttonscolors}
            title="Orange Theme"
            onPress={() => toggleTheme('orange')}
            color="orange"
            /> 
        </View>

        <View style={buttonstyles}>   
       
            <Button style={buttonscolors}
            title="Green Theme"
            onPress={() => toggleTheme('green')}
            color="green"
            /> 
        </View>

        <View style={buttonstyles}>  
          <Button style={buttonscolors}
            title="Black Theme"
            onPress={() => toggleTheme('black')}
            color="black"
            /> 
        </View>

        <View style={buttonstyles}>  
     
           <Button style={buttonscolors}
            title="Red Theme"
            onPress={() => toggleTheme('red')}
           color="red"
            /> 
        </View>

  
        </View>

    )
}
