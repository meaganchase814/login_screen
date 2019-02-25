import React, {Component} from 'react';
import {StyleSheet, View, Image, Picker, Text, KeyboardAvoidingView, Dimensions, TouchableHighlight, TextInput, TouchableOpacity} from 'react-native';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            language: " ",
          };
      
          // this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
          // this.backdropClickHandler = this.backdropClickHandler.bind(this);
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <View style={styles.inputWrapper} >
                    <Text>Add a short bio</Text>
                    <TextInput 
                            placeholder="bio"
                            placeholderTextColor='rgba(255, 255, 255, 0.2)'
                            returnKeyType='next'
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                    />
                    <View>
                        <Text>Gender</Text>
                        <TouchableHighlight
                            title="male"
                        >
                            <Text>M</Text>
                        </TouchableHighlight>
                    </View>
                    <Text>Birthday</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Jan" value="Jan" />
                        <Picker.Item label="Feb" value="Feb" />
                        <Picker.Item label="March" value="March" />
                        <Picker.Item label="April" value="April" />
                        <Picker.Item label="May" value="May" />
                    </Picker>

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
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        width: 100,
        
    },
    inputWrapper: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        borderRadius: 50,
        height: 20,
        paddingTop: 2,
      },
      buttonWraper: {
        flexGrow: 1, 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
       
      },
    
})
    