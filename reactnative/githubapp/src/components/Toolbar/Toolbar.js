import React from 'react';
// import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header style={styles.toolbar}>
        <nav style={styles.toolbar_navigation}>
            <div style={styles.toolbar_toggle-button}>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div style={styles.toolbar_logo}><a href="/">THE LOGO</a></div>
            <div style={styles.spacer}></div>
            <div style={styles.toolbar_navigation-items}>
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Messages</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;

const styles = StyleSheet.create({
    toolbar: {
        position: fixed,
        top: 0,
        left: 0,
        width: 100,
        Background: #521751,
        height: 56px,
    },
    
    toolbar_navigation: {
        display: flex,
        height: 100%,
        align-items: center,
        padding: 0 1rem,
    },
    
    toolbar_logo: {
        margin-left: 1rem,
    },
    
    toolbar_logo: a {
        color: white;
        text-decoration: none,
        font-size: 1.5rem,
    },
    
    spacer {
        flex: 1;
    }
    
    toolbar_navigation-items ul {
        list-style: none,
        margin: 0,
        padding: 0,
        display: flex,
    }
    
    toolbar_navigation-items li {
        padding: 0 0.5rem,
        color: rgb(236, 48, 48),
    },
    
    toolbar_navigation-items a {
        color: white,
        text-decoration: none,
    },
    toolbar_navigation-items a:hover,
    toolbar_navigation-items a:active: {
        color: orange;
    },
    
    
    
})