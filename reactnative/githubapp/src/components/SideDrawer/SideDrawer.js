import React from 'react';
// import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav style={drawerClasses}>
            <ul style={styles.side-drawer_ul}>
                <li style={styles.side-drawer_li}><a href="/">Profile</a></li>
                <li style={styles.side-drawer_li}><a href="/">Messages</a></li>
                <li style={styles.side-drawer_li}><a href="/">Settings</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;

const styles = StyleSheet.create({
    side-drawer {
        height: 100%,
        background: white,
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5),
        position: fixed,
        top: 0,
        left: 0,
        width: 70%,
        max-width: 400px,
        z-index: 200,
        transform: translateX(-100%),
        transition: transform 0.3s ease-out,
    },
    
    side-drawer.open {
        transform: translateX(0),
    },
    
    side-drawer ul: {
        height: 100%,
        list-style: none,
        display: flex,
        flex-direction: column,
        justify-content: center,
    },
    
    side-drawer li: {
        margin: 0.5rem 0;
    },
    
    side-drawer a: {
        color: purple,
        text-decoration: none,
        font-size: 1.2rem,
    },
    
    side-drawer a:hover,
    side-drawer a:active: {
        color: orange,
    },
    
})