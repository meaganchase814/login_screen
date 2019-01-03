import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button} from 'react-native';

export class Home extends Component {
    
    render() {
        
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home... again"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>   
           
        )
    }
};

export default Home;



const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#3498db'
    },
    
})