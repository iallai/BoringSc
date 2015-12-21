/**
 * Created by iallai on 21/12/2015.
 */
/**
 * Created by iallai on 21/12/2015.
 */
import React from 'react-native';
import styles from '../styles/main';


var {
    TabBarIOS,
    Text,
    View,
    WebView
    } = React;

class Webview extends React.Component{
    constructor(props) {
        super(props);

    }


    render(){
        let URL='http://www.paipaizhao.net/mb'
        return (
            <View style={styles.webView}>

                <WebView style={styles.webView}
                    url={URL}
                    javaScriptEnabledAndroid={true}

                         scalesPageToFit={true}
                />

            </View>

        );

    }

}


export { Webview as default };