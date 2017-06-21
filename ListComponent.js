import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  PropTypes,
  Button,
  ListView,
  View
} from 'react-native';
let lists =  new Array();
class ListComponent extends Component {

  constructor(props) {
    super(props);

    lists.push('aaa');
    this.state = { text: '输入个东西' ,datasss:lists.concat('bbb')};

     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {

       dataSource: ds.cloneWithRows(this.state.datasss)
     };

}

 onButtonPress(){

  // this.setState({list:this.state.list.concat(this.state.text) });
  lists.push(this.state.text);
   this.setState ({
      dataSource: this.state.dataSource.cloneWithRows(lists)
   });
  this.state.text='';//willUpdate，render
  this.setState({ text: '' })

}
static navigationOptions = {
       title:'测试list',
   };
  render() {

      return (
        <View>
     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(text) => this.setState({text})}
       value={this.state.text}
     />
     <Button
         onPress={this.onButtonPress.bind(this)}
        title="Press Me"
        accessibilityLabel="See an informative alert"
      />
      <ListView
     dataSource={this.state.dataSource}
     renderRow={(rowData) => <Text>{rowData}</Text>}
   />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default ListComponent;
