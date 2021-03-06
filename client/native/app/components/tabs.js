/**
 * Created by iallai on 21/12/2015.
 */
import React from 'react-native';
import styles from '../styles/main';
import icons from '../assets/icons';
import Videos from   './videos';
import Webview from './webview';
import WebviewDetail from './webviewDetail';

import Scroll from './scroll';

let {
    TabBarIOS,
    Text,
    View,
    } = React;


class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'homeTab'
        };

    }

    push(){

        this.props.navigator.push({

            title: '视频',
            component: Videos,
            passProps: {

            }
        })
    }
     render(){

             return (
                <TabBarIOS>

                    <TabBarIOS.Item
                        icon={{uri: icons.star, scale: 4.6}}
                        selectedIcon={{uri: icons.starActive, scale: 4.6}}
                        title="主页"
                        selected={this.state.selectedTab === 'homeTab'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'homeTab',
                            });
                          }}>
                        <View style={styles.body}>
                            <Text>webview测试用户:</Text>
                            <Text>erdaye</Text>
                            <Text>chd123123</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="视频列表1"
                        icon={{uri: icons.board, scale: 4.6}}
                        selectedIcon={{uri: icons.boardActive, scale: 4.6}}
                        selected={this.state.selectedTab === 'listTab1'}
                        onPress={() => {
                           this.push()
                          }}>

                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="视频列表2"
                        icon={{uri: icons.board, scale: 4.6}}
                        selectedIcon={{uri: icons.boardActive, scale: 4.6}}
                        selected={this.state.selectedTab === 'listTab2'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'listTab2',
                            });
                          }}>
                        <WebviewDetail></WebviewDetail>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        icon={{uri: icons.search, scale: 4.6}}
                        title="Webview测试"
                        selected={this.state.selectedTab === 'search'}
                        onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
                        <Webview></Webview>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        icon={{uri: icons.user, scale: 3.3}}
                        title="Scroll测试"
                        selected={this.state.selectedTab === 'user'}
                        onPress={() => {
            this.setState({
              selectedTab: 'user'
            });
          }}>
                       <Scroll></Scroll>
                    </TabBarIOS.Item>

                </TabBarIOS>


             );

     }

}


export { Tabs as default };