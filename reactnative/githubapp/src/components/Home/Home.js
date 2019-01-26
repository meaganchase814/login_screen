import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions, Button,} from 'react-native';

import Toolbar from '../Toolbar/Toolbar.js';
import SideDrawer from '../SideDrawer/SideDrawer.js';
import Backdrop from '../Backdrop/Backdrop.js'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sideDrawerOpen: false
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <View style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>this is the page content</p>
        </main>
      </View>
    );
  }
}




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
    
})