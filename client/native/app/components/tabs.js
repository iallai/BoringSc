/**
 * Created by iallai on 21/12/2015.
 */
import React from 'react-native';
import styles from '../styles/main';
import icons from '../assets/icons';
import Videos from './videos';

var {
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
                            <Text>Home</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="视频列表"
                        icon={{uri: icons.board, scale: 4.6}}
                        selectedIcon={{uri: icons.boardActive, scale: 4.6}}
                        selected={this.state.selectedTab === 'listTab'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'listTab',
                            });
                          }}>
                    <Videos></Videos>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        icon={{uri: icons.search, scale: 4.6}}
                        title="搜索"
                        selected={this.state.selectedTab === 'search'}
                        onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
                        <View style={styles.body}>
                            <Text>搜索</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        icon={{uri: icons.user, scale: 3.3}}
                        title="我的"
                        selected={this.state.selectedTab === 'user'}
                        onPress={() => {
            this.setState({
              selectedTab: 'user'
            });
          }}>
                        <View style={styles.body}>
                            <Text>我的</Text>
                        </View>
                    </TabBarIOS.Item>

                </TabBarIOS>


             );

     }

}


export { Tabs as default };