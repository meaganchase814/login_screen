import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions, Button,} from 'react-native';
import { Container, Navbar } from 'navbar-native';

export class Home extends Component {
    
    render() {
        
        return(
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Details Screen</Text>
    //     <Button
    //       title="Go to Home... again"
    //       onPress={() => this.props.navigation.push('Home')}
    //     />
    //     <Button
    //       title="Go to Login"
    //       onPress={() => this.props.navigation.navigate('Login')}
    //     />
    //     <Button
    //       title="Go back"
    //       onPress={() => this.props.navigation.goBack()}
    //     />
    //   </View>   
            
            <Container>
                <Navbar
                    user={true}
                    title={"Navbar Native"}
                    titleColor="white"
                    imageBackground={{
                        source:'https://facebook.github.io/react/img/logo_og.png',
                        type: 'remote',
                        resizeMode: 'cover'
                    }}
                    statusBar={{
                        style: "light-content",
                        // hideAnimation: Navbar.FADE,
                        // showAnimation: Navbar.SLIDE,
                    }}
                    left={{
                        icon: "md-arrow-back",
                        iconColor: "white",
                        label: "Back",
                        onPress: () => {alert('Go back!')},
                        style:{color: 'white'}
                    }}
                    right={[{
                        icon: "md-search",
                        iconColor: "white",
                        onPress: () => {alert('Search!')}
                    },{
                        icon: "md-menu",
                        iconColor: "white",
                        onPress: () => {alert('Toggle menu!')}
                    }]}
                />
            </Container>
           
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