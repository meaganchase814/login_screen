import React from 'react';
// import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions, Button, TextInput,} from 'react-native';

const toolbar = props => {
    return (
        <View style={styles.toolbar}>
            <View style={styles.toolbar_navigation}>
                <View style={styles.toolbar}>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </View>
                {/* <Text style={styles.toolbar_logo}><a href="/">THE LOGO</a></Text> */}
                <View style={styles.spacer}></View>
                <View style={styles.toolbar_navigation_items}>
                    <View style={styles.toolbar_navigation_items_ul}>
                        {/* <Text style={styles.toolbar_navigation_items_li}><a href="/">Profile</a></Text>
                        <Text style={styles.toolbar_navigation_items_li}><a href="/">Messages</a></Text>
                        <Text style={styles.toolbar_navigation_items_li}><a href="/">Settings</a></Text> */}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default toolbar;

const styles = StyleSheet.create({
    toolbar: {
       
        
        width: 100,
     
        height: 56,
    },
    
    toolbar_navigation: {
    
        height: 100,
        
    },
    
    toolbar_logo: {
        
    },
    
    // toolbar_logo: a {
    //     color: 'white',
    //     textdecoration: none,
    //     fontsize: 1.5,
    // },
    
    spacer: {
        
    },
    
    toolbar_navigation_items_ul: {
      
     
        
    },
    
    toolbar_navigation_items_li: {
        
    
    },
})