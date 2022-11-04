import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
        // TODO Otra forma de hacerlo es con el callback que se el puede enviar al set de useState
        // setCategories( cat => [ ...cat, 'Valorant' ]);
    }

    return (
        <>
            {/*  Titulo  */}
            <h1>GifExpertApp</h1>

            {/* Input busqueda */}
            {/* 
                // TODO esta implementación manda al componente hijo 
                la funcion para actualizar el estaodo 
                <AddCategory setCategories={ setCategories } /> 
            */}

            {/* // TODO desde esta recibimos el valor emitido por el 
                componente hijo y actualizamos el estado desde el 
                componente padre 
            */}
            <AddCategory onNewCategory={(event) => onAddCategory(event)} />

            {/* Listados de Gif */}
            {/*
                <ol>
                    categories.map((category) => (
                        <div key={category}>
                            <h3>{category}</h3>
                            <li> {category} </li>
                        </div>
                    ))
                </ol>
            */}
            { categories.map( (category) => (
                        <GifGrid key={category} category={ category } /> 
                    ))
            }
            
            {/* Gif Item */}
        </>
    )
}
