import React, { Component } from 'react';
import { useContext } from 'react';
import { PigContext } from '../context/PigContext';

export default function Fav() {
    
    const {pork, handleLike} = useContext(PigContext);
   
    return (
        <>
            <div className="row api">
                {pork.filter((item) => item.liked === true).map((piggy) => {
                const {liked, id, alt, url} = piggy;
                return  <div key={id} className="col-lg-3 mb-5">
                    <div className="card wrap-card">
                        <figure className='mb-0'>
                            <img className="w-100" src={piggy.src.tiny} alt="piggy" />
                        </figure>
                        <div className="card-body">
                            <h5 className="card-title">{alt}</h5>                            
                        </div>
                        <svg className="svg-like" onClick={() => handleLike(liked, id, alt, url )} width="40px" viewBox="0 0 24 24">
                                   { liked === false ? <path fill="white" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /> : <path fill="red" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /> 
                                   }
                        </svg>
                    </div>
                </div>
                })}
            </div>
        </>
    )
    
}

