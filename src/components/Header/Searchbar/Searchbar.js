import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onSearch: PropTypes.func.isRequired
};

function Searchbar(props) {
    const [term, setTerm] = useState('');
    const search = () => {
        props.onSearch(term);
    }
    return (
        <div className="d-flex">
                <input
                    value={term}
                    onKeyDown={event => event.key === 'Enter' && search() }
                    onChange={event => setTerm(event.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Szukaj..."
                />
                <button
                    onClick={search}
                    className="ml-2 btn btn-dark">
                        Szukaj
                </button>
        </div>
    );
}

Searchbar.propTypes = propTypes;

export default Searchbar;