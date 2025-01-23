import React from 'react';

const Navbar = () => {

    const styles = {
        navbar: {
            backgroundColor: 'lightgray',
            position: 'fixed',
            top: 0,
            width: 100 + '%'
        },
        h1: {
            color: 'black',
            textAlign: 'center'
        }
    }

    return (
        <div style={styles.navbar}>
            <Sidebar />
            <h1 style={styles.h1}>Wishlister</h1>
            <Account />
        </div>
    )
}

export default Navbar;