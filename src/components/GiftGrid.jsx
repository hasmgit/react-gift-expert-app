import React from 'react'
//import { getGifs } from '../helpers/getGifts';
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

const GiftGrid = ({category}) => {

const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="cardGrid ">
                {
                    images.map(i => (<GifGridItem 
                        className="animate__animated animate__fadeIn"
                        key={i.id} 
                        {...i}/>))
                }
        </div>
        </>
    )
}


export default GiftGrid
