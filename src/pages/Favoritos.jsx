import React, { Component, useContext, useEffect, useState } from 'react';
import Fav from '../components/Fav';

export default function Favoritos() {
    return (
        <>
            <div className="container fav pt-4">
                <div className="row franja">
                    <div className="col-lg-12">
                        <p>Deploy: <a target="_blank"  href="https://context-router.netlify.app/">Aquí</a></p>
                        <p>Repositorio: <a target="_blank" href="https://github.com/javierfdb/context-router">Aquí</a></p>
                        <p>Datos se guardan en LocalStorage</p>
                    </div>
                </div>
                <Fav/>
            </div>
        </>
    )
};
