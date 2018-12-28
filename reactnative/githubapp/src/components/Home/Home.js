import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button} from 'react-native';

export class Home extends Component {
    
    render() {
        
        return(
            <View style={styles.container}>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
            </View>
               
           
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#3498db'
    },
    
})