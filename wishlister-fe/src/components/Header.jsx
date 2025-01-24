import React from 'react';
import AccountButton from './AccountButton';

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
            <h1 style={styles.h1}>Wishlister</h1>
            <AccountButton />
        </div>
    )
}

export default Navbar;