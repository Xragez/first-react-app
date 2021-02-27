import React from 'react';
import styles from './Hotel.module.css'
import img from '../../../assets/images/hotel.jpg'

function Hotel (props) {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-4" >
                        <img 
                        src={img} 
                        alt="" 
                        className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-8" >
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>{props.name}</p>
                                <span className="badge badge-warning">{props.city}</span>
                            </div>
                            <div className="col">
                                <p>{`Ocena: ${props.rating}`}</p>
                                <p>{`Opinie: ${props.opinionsNumber}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.description}>
                        {props.description}
                        </p>
                        <a href="#"className="btn btn-primary float-right px-5">Pokaż</a>
                    </div> 
                </div>
            </div>
        </div>

        
    )
}

export default Hotel;