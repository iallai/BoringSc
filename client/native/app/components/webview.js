/**
 * Created by iallai on 21/12/2015.
 */

import React from 'react-native';
import styles from '../styles/main';
import WebviewDetail from './webviewDetail';


let {
    TabBarIOS,
    NavigatorIOS,
    Text,
    View,
    WebView
    } = React;

class Webview extends React.Component{
    constructor(props) {
        super(props);
        this.pushWeb();
    }
    pushWeb(url){
        console.log("push!!!",url)


    }

    onNavigationStateChange(navState){
        this.pushWeb(navState.url)
    }

    render(){
        let URL='http://www.paipaizhao.net/mb'
        return (
            <View style={styles.webView}>

                <WebView style={styles.webView}
                    url={URL}
                    javaScriptEnabledAndroid={true}
                         onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                         scalesPageToFit={true}
                />

            </View>

        );

    }

}


export { Webview as default };