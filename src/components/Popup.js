import React from 'react';

const Popup = () => {
    return (
        <div style={styles.main}>
            <h2>This is the popup page of the extension</h2>
        </div>
    )
}

const styles = {
    main: {
        width: '400px',
        height: '150px'
    }
}

export default Popup;