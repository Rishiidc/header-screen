import React from 'react'
import {Header, Icon, Badge} from 'react-native-elements'
import {Text, View} from 'react-native'

export const MyHeader = (props) =>{
   return(
       <Header 
       leftComponent = {<Icon name = "bars" type = "font-awesome" color = "yellow" onPress = {()=>props.navigation.toggleDrawer()} />}
       centerComponent = {{text: props.title}} 
     />
   )
}
