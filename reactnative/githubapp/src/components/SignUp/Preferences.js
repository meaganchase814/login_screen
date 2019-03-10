import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, TouchableOpacity, TouchableHighlight, TextInput,} from 'react-native';

export default class Preferences extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            language: " ",
            text: ''
        };
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View >
                    <View style={{justifyContent: 'center', alignItems: 'center'}} >
                        <Text>Add an interest</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput 
                                    placeholder="Interest"
                                    placeholderTextColor='rgba(255, 255, 255, 0.2)'
                                    returnKeyType='next'
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    multiline = {true}
                                    numberOfLines = {4}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    style={styles.input}    
                                />
                            
                                <TouchableOpacity 
                                    title='add'
                                    // when you type in the box, then click the "+" button
                                    // that interest will be added
                                    >
                                    <Text style={styles.buttonContainer2}>+</Text>
                                </TouchableOpacity>
                            </View>
                                           
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Select connections that interest you</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                    title="casual"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>casual</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity
                                    title="professional"
                                    style={{borderWidth: 1, padding: 3, margin: 2}}
                                >
                                    <Text>professional</Text>
                            </TouchableOpacity>  
                                <TouchableOpacity
                                    title="dating"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>dating</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Select meeting preferences</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                    title="chat"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>chat</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity
                                    title="coffee"
                                    style={{borderWidth: 1, padding: 3, margin: 2}}
                                >
                                    <Text>coffee</Text>
                            </TouchableOpacity>  
                                <TouchableOpacity
                                    title="drink"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>drink</Text>
                            </TouchableOpacity>  
                            <TouchableOpacity
                                    title="meal"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>meal</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity 
                            title='Next'
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={{justifyContent: 'center', alignItems: 'center'}}
                            >
                            <Text style={styles.buttonContainer}>Next</Text>
                        </TouchableOpacity>                
                    </View>
                </View>
            
            </KeyboardAvoidingView> 
        )
    };

}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        
        flexDirection: 'column',
        // display: 'block',
        

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        
        
    },
    logo: {
        marginTop: 10,
        width: 100,
        height: 100,
    },
    title1: {
        color: 'red',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    title2: {
        color: 'blue',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    title3: {
        color: 'yellow',
        textAlign: 'center',
        opacity: 0.9,
        margin: 0,
        padding: 0,
    },
    titleWrapper: {
        flex: 1,
        flexDirection:'row',
       justifyContent: 'center'
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        // paddingHorizontal: 10,
        width: 250,        
    },
    inputWrapper: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        fontSize: 10,
        color: 'red',  
        backgroundColor: 'lightgrey',
        marginLeft: 150,
        marginRight: 150,
        textAlign: 'center',
        margin: 1,
        height: 20,
        paddingTop: 2,
        width: 50,
        
        
      },
      buttonContainer2: {
        fontSize: 10,
        color: 'red',  
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        margin: 1,
        height: 30,
        justifyContent: 'center',
        width: 30,
        
      },

      buttonWraper: {
        flexGrow: 1, 
        
        flexDirection:'row',
     
       
      },
    picker: {
        height: 50, 
        width: 120,
        alignItems: 'center'
    },
    
})
    