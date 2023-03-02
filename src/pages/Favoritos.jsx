import React, { Component, useContext, useEffect, useState } from 'react';
import Fav from '../components/Fav';

export default function Favoritos() {
    return (
        <>
            <div className="container fav pt-4">
                <Fav/>
            </div>
        </>
    )
};
