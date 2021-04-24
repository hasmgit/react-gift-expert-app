import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'


const GiftExpertApp = props => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    const handleAdd = () => {
        setCategories([...categories, 'Shingueki no kiojin']);
    }

    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategories={setCategories}/>
          <hr></hr>
           {/* <button onClick={handleAdd}>Agregar</button>  */}
          <ul>
              {
                  categories.map((category, i) => <GiftGrid category={category}
                                                            key={category}/>)
              }
          </ul>
        </>
    )
}

GiftExpertApp.propTypes = {

}

export default GiftExpertApp
