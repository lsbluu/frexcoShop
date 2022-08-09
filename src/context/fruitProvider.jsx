import { useEffect, useState, React } from 'react'
import fetchApi from '../api/fetchApi'
import fetchImg from '../api/images'
import FruitContext from './fruitContext'
import PropTypes from 'prop-types'

function FruitProvider ({ children }) {
  const [Fruits, setFruits] = useState([])
  const [CartItems, setCartItems] = useState([])
  const [Loading, setLoading] = useState(true)
  const [FruitImge, setFruitImge] = useState([])

  const getFruits = async () => {
    const fruitsResponse = await fetchApi()
    setLoading(false)
    setFruits(fruitsResponse)
    const img = fetchImg
    setFruitImge(img)
  }

  useEffect(() => {
    getFruits()
  }, [])

  const context = {
    Fruits,
    CartItems,
    setCartItems,
    Loading,
    setLoading,
    FruitImge
  }

  return (
  <FruitContext.Provider value={ context }>
    { children }
  </FruitContext.Provider>
  )
}

FruitProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default FruitProvider
