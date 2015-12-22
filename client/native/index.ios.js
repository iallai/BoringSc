/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React from 'react-native';
import Tabs from './app/components/tabs';

let {
  AppRegistry,

  NavigatorIOS,

} = React;
class App extends React.Component{

  render(){
    return (
        <NavigatorIOS
            ref="nav"
            style={{flex : 1,backgroundColor: '#000000'}}
            tintColor='#dddddd'
            barTintColor='#cccccc'
            initialRoute={{
              title: '星际学院',
              component: Tabs,
            }}/>
    );
  }

}




AppRegistry.registerComponent('native', () => App);
