import React from 'react';
// import './Backdrop.css'
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput,} from 'react-native';
const backdrop = props => {
    return (
        <View style={styles.backdrop} onClick={props.click}/>
    );
   
};

export default backdrop;

const styles = StyleSheet.create({
    backdrop: {
        
        width: 100,
        height: 100,
    
        
    },
    
})