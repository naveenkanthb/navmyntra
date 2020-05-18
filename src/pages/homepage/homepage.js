import React from 'react'
import "./homepage.styles.scss";
import Directory from '../../components/directory/directory'

export const homepage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default homepage;
