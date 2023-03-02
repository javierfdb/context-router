import { createContext, useState, useEffect } from "react";

export const PigContext = createContext()

export default function PigContextProvider({children}) {

    // Logica

    const [pork, setPork] = useState(JSON.parse(localStorage.getItem('porkisito')) || [] );

    const getPigs = async () => {
        const url = '/fotos.json';
        const response = await fetch(url)
        const allPigs = await response.json();
        setPork(allPigs.photos);
    }

    if (localStorage.getItem("porkisito") === null) {
        getPigs();
    } else {};

    useEffect(() => {
        localStorage.setItem('porkisito', JSON.stringify(pork));
    }, [pork]);

    const handleLike = (liked, id, alt, url) => {
        const newArray = pork.map((item) => {
            if (item.id === id) { 
              if(item.liked === false)  {
                return { ...item, liked: true };
              } else if (item.liked === true) {
                return { ...item, liked: false };
              }
            } else {
                return item;
              }
          });
          setPork(newArray);  
    };

    return (
        <PigContext.Provider value={{pork: pork, setPork: setPork, handleLike: handleLike }}>
            {children}
        </PigContext.Provider>
    )
}  