import React from 'react';

function Searchbar() {
    return (
        <div className="row">
            <div className="form-group col">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Szukaj..."
                />
            </div>
            <div className="col">
                <button className="btn btn-primary">Szukaj</button>
            </div>
        </div>
    );
}

export default Searchbar;