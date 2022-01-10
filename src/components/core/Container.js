import React from 'react'
import "../../styles.css"


export default function Container({show}){
    if(!show){
        return <div></div>
    }

    return (
        <div>
            <div className="row">
                <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
                    TEXT
                </div>
            </div>
        </div>
        )

    }