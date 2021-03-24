import React, {useState, useContext} from 'react';
import {View} from 'react-native'

const BackGroundContext = React.createContext()
const ToggleBackGroundContext = React.createContext()

export function useBackgroundTheme(){
    return useContext(BackGroundContext)
}

export function useToggleBackgroundTheme(){
    return useContext(ToggleBackGroundContext)
}

export function BackgroundProvider({children}){
    const [colorTheme, setColor]= useState("blue")

    function toggleColor (newColor){
        setColor(newColor)
    }

    return (
        <BackGroundContext.Provider value={colorTheme}>
            <ToggleBackGroundContext.Provider value={toggleColor}>

            {children}

            </ToggleBackGroundContext.Provider>
        </BackGroundContext.Provider>
    )

}




  const buttonstyles = {
  
    padding: "1%",
    width: "50%",
    margin: "1%",
    backgroundColor: "#fff",
   

  }
  export { buttonstyles }





  const  buttonscolors = {
    width: "50%",
    margin: "3%",
  
  
    colorTheme: " blue",

    boxSizing: "border-box"
  }
  export { buttonscolors }