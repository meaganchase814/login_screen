import React from 'react';
import './Backdrop.css'

const backdrop = props => (
    <div style={styles.backdrop} onClick={props.click}/>
);

export default backdrop;

const styles = StyleSheet.create({
    backdrop: {
        position: fixed,
        width: 100%,
        height: 100%,
        top: 0,
        left: 0,
        background: rgba(0, 0, 0, 0.534),
        z-index: 100,
    },
    
})