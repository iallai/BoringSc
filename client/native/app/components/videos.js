/**
 * Created by iallai on 21/12/2015.
 */
import React from 'react-native';
import styles from '../styles/main';

let {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicatorIOS,
    TouchableHighlight,
} = React;


class Videos extends React.Component{
    constructor(props) {
        super(props);

    }


    render(){

        return (
            <View style={styles.body}>
                <Text>视频</Text>
            </View>

        );

    }

}


export { Videos as default };