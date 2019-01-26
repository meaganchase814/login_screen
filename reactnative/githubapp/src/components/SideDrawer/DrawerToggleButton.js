import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    < button style={styles.toggle-button} onClick={props.click}>
        <div style={styles.toggle-button_line}/>
        <div style={styles.toggle-button_line}/>
        <div style={styles.toggle-button_line}/>
    </button>
);

export default drawerToggleButton;

const styles = StyleSheet.create({
    toggle-button: {
        display: flex,
        flex-direction: column,
        justify-content: space-around,
        height: 24px,
        width: 30px,
        background: transparent,
        border: none,
        cursor: pointer,
        padding: 0,
        box-sizing: border-box,
    },
    
    toggle-button:focus:  {
        outline: none,
    },
    
    toggle-button_line: {
        width: 30px,
        height: 2px,
        background: white,
    },
    
})