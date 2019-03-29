import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions, Button,TouchableOpacity} from 'react-native';

import Toolbar from '../Toolbar/Toolbar.js';
import SideDrawer from '../SideDrawer/SideDrawer.js';
import Backdrop from '../Backdrop/Backdrop.js'

export class Home extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     sideDrawerOpen: false,
  //   };

  //   // this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
  //   // this.backdropClickHandler = this.backdropClickHandler.bind(this);
  // }

  

  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {sideDrawerOpen: !prevState.sideDrawerOpen};
  //   });
  // };

  // backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen: false});
  // };


  render() {
    // let backdrop;

    // if (this.state.sideDrawerOpen){
    //   backdrop = <Backdrop click={this.backdropClickHandler} />;
    // }
    return (
      
      <View style={styles.container}>
        <View style={styles.buttonWraper}>
          
          <TouchableOpacity 
                    title='Profile'
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.buttonContainer}>Profile</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity 
                    title='Messages'
                    onPress={() => this.props.navigation.navigate('Messages')}>
                    <Text style={styles.buttonContainer}>Messages</Text>
          </TouchableOpacity> 
          <TouchableOpacity 
                    title='Settings'
                    onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={styles.buttonContainer}>Settings</Text>
          </TouchableOpacity> 
          <TouchableOpacity 
                    title='Logout'
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonContainer}>Logout</Text>
          </TouchableOpacity> 
        </View>
        {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> */}
        {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
        {/* {backdrop}  */}
        <View >
          <Text>this is the page content</Text>
        </View>
      </View>
      
    );
  }
}

export default Home;



// export class Home extends Component {
    
//     render() {
        
//         return(
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Home... again"
//           onPress={() => this.props.navigation.push('Home')}
//         />
//         <Button
//           title="Go to Login"
//           onPress={() => this.props.navigation.navigate('Login')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>   
            
//             // <Container>
//             //     <Navbar
//             //         user={true}
//             //         title={"Navbar Native"}
//             //         titleColor="white"
//             //         imageBackground={{
//             //             source:'https://facebook.github.io/react/img/logo_og.png',
//             //             type: 'remote',
//             //             resizeMode: 'cover'
//             //         }}
//             //         statusBar={{
//             //             style: "light-content",
//             //             // hideAnimation: Navbar.FADE,
//             //             // showAnimation: Navbar.SLIDE,
//             //         }}
//             //         left={{
//             //             icon: "md-arrow-back",
//             //             iconColor: "white",
//             //             label: "Back",
//             //             onPress: () => {alert('Go back!')},
//             //             style:{color: 'white'}
//             //         }}
//             //         right={[{
//             //             icon: "md-search",
//             //             iconColor: "white",
//             //             onPress: () => {alert('Search!')}
//             //         },{
//             //             icon: "md-menu",
//             //             iconColor: "white",
//             //             onPress: () => {alert('Toggle menu!')}
//             //         }]}
//             //     />
//             // </Container>
           
//         )
//     }
// };

// export default Home;



const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#3498db'
    },
    buttonContainer: {
      fontSize: 10,
      color: 'red',  
      backgroundColor: 'lightgrey',
      width: 100,
      textAlign: 'center',
      justifyContent: 'center',
      margin: 1,
      height: 15,
      
    },
    buttonWraper: {
      flex: 7,
      flexWrap: 'wrap', 
      alignItems: 'flex-start',
      flexDirection:'row',
      
    },

    
})