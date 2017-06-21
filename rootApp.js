import React from 'react';
import {
    AppRegistry,
    Text,View,Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import ChatScreen from './ChatScreen';
import ListComponent from './ListComponent';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',//设置标题内容
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>测试List</Text>
                <Button
                    onPress={() => navigate('List',{user:'List'})}
                    title="测试List"/>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    List:{screen:ListComponent},

});

export default SimpleApp;
