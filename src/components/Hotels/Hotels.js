import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel'
import styles from './Hotels.module.css';

const propTypes = {
    hotels: PropTypes.array.isRequired
}

function Hotels(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Oferty: </h2>
            {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
        </div>
    );
}

Hotels.propTypes = propTypes;
export default Hotels;