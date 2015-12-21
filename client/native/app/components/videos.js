/**
 * Created by iallai on 21/12/2015.
 */
import React from 'react-native';
import styles from '../styles/main';


var {
    TabBarIOS,
    Text,
    View,
    } = React;


class Videos extends React.Component{
    constructor(props) {
        super(props);

    }


    render(){

        return (
            <View style={styles.body}>
                <Text>视频列表</Text>
            </View>

        );

    }

}


export { Videos as default };