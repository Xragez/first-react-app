import React from 'react';
import { Button } from 'reactstrap';

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
                <Button color="primary">Szukaj</Button>
            </div>
        </div>
    );
}

export default Searchbar;