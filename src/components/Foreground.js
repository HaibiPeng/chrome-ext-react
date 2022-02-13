import React from 'react';

function Foreground() {
    return (
        <div style={styles.main}>
            <h1>Extention Description</h1>
            <h3>This is a google chrome extension build with React, using Manifest V3</h3>
        </div>
    )
}

const styles = {
    main: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        pointerEvents: 'none'
    }
}

export default Foreground;