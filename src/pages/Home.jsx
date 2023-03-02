import React, { Component, useContext, useEffect, useState } from 'react';
import Api from '../components/Api';

export default function Home() {

    return (
        <>
            <div className="container pt-4">
                <Api/>
            </div> 
        </>
    )
}