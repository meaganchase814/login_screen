import React, {Component} from 'react';
import {StyleSheet, View, Image, Picker, Text, KeyboardAvoidingView, Dimensions, TouchableHighlight, TextInput, TouchableOpacity} from 'react-native';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            language: " ",
            text: ''
          };
      
          // this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
          // this.backdropClickHandler = this.backdropClickHandler.bind(this);
    }
    render() {
        return(
          
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.inputWrapper} >
                            <View>
                                <Text>Add a short bio</Text>
                                <TextInput 
                                    placeholder="bio"
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
                            </View>
                            <View>
                                <Text>Gender</Text>
                                <View style={{flexDirection: 'row'}}>
                                <TouchableHighlight
                                    title="male"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>M</Text>
                                </TouchableHighlight>    
                                <TouchableHighlight
                                    title="female"
                                    style={{borderWidth: 1, padding: 3, margin: 2}}
                                >
                                    <Text>F</Text>
                                </TouchableHighlight>  
                                <TouchableHighlight
                                    title="other"
                                    style={{borderWidth: 1, padding: 2, margin: 2}}
                                >
                                    <Text>O</Text>
                                </TouchableHighlight>  
                                </View>
                            </View>
                        <View>
                            <Text>Birthday</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({language: itemValue})
                                    }>
                                    <Picker.Item label="Jan" value="Jan" />
                                    <Picker.Item label="Feb" value="Feb" />
                                    <Picker.Item label="March" value="March" />
                                    <Picker.Item label="April" value="April" />
                                    <Picker.Item label="May" value="May" />
                                </Picker>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({language: itemValue})
                                    }>
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                    <Picker.Item label="4" value="4" />
                                    <Picker.Item label="5" value="5" />
                                </Picker>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({language: itemValue})
                                    }>
                                    <Picker.Item label="1980" value="1980" />
                                    <Picker.Item label="1990" value="1990" />
                                    <Picker.Item label="2000" value="2000" />
                                </Picker>
                            </View>
                            </View>
                            

                    
                            <View style={styles.buttonWrapper} >
                                <View>
                                    <TouchableOpacity 
                                    title='Next'
                                    onPress={() => this.props.navigation.navigate('Home')}
                                    >
                                    <Text style={styles.buttonContainer}>Next</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>                    
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
        flexWrap: 'wrap',
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
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 300,
        
        flexWrap: 'wrap'
        
    },
    inputWrapper: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap'
    },
    buttonContainer: {
        fontSize: 10,
        color: 'red',  
        backgroundColor: 'lightgrey',
        marginLeft: 150,
        marginRight: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 1,
        height: 20,
        paddingTop: 2,
        width: 50,
      },
      buttonWraper: {
        flexGrow: 1, 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
       
      },
    picker: {
        height: 50, 
        width: 120,
        alignItems: 'center'
    },
    
})
    