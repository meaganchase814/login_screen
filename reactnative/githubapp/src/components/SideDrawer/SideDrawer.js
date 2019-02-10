import React from 'react';
// import './SideDrawer.css';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput, Nav} from 'react-native';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <View>
            <Nav style={drawerClasses}>
                <View >
                    <li ><a href="/">Profile</a></li>
                    <li ><a href="/">Messages</a></li>
                    <li ><a href="/">Settings</a></li>
                </View>
            </Nav>
        </View>
    );
};

// export default sideDrawer;

const styles = StyleSheet.create({
    sidedrawer: {
        height: 100,
       
        // boxshadow: 1px 0px 7px rgba(0, 0, 0, 0.5),
       
       
        width: 70,
     
        // transition: transform 0.3s easeout,
    },
    
    // sidedrawer.open: {
    //     transform: translateX(0),
    // },
    
    sidedrawer_ul: {
        height: 100,
    
    },
    
    sidedrawer_li: {
       
    },
    
    // side-drawer a: {
    //     color: purple,
    //     text-decoration: none,
    //     font-size: 1.2rem,
    // },
    
    // side-drawer a:hover,
    // side-drawer a:active: {
    //     color: orange,
    // },
    
})