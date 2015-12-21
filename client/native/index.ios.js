/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React from 'react-native';
import Tabs from './app/components/tabs';

let {
  AppRegistry,
  Text,
  View,
} = React;
class App extends React.Component{

  render(){
    return(
        <Tabs></Tabs>
    )
  }

}




AppRegistry.registerComponent('native', () => App);
