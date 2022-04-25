import React, { useEffect } from "react";
import { useAtom } from "jotai";
import * as atoms from './store'

//material-ui
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// styles 
import { Wrapper } from './App.styles'
import { log } from "console";

const App = () => {
  const [products, setProducts] = useAtom(atoms.Products);
  const [loading, setLoading] = useAtom(atoms.Loading);
  const [error, setError] = useAtom(atoms.Error);


  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(setProducts)
      setLoading(true);
    }
    // call the function
    fetchData()
  }, [])

  // const getTotalItems = () => null;

  // const handleAddToCart = () => null;

  // const handleRemoveFromCart = () => null;
  console.log(loading);
  console.log(error);

  if (!loading) return <LinearProgress />
  if (error) return <div>Error!</div>

  return <div className="App">{
    products.map(product => {
      return (<div key={product['id']}>
        <h3>{product['title']} - {product['price']}</h3>
        <img src={product['image']} alt={product['title']} height={100} width={100} />
      </div>)
    })
  }</div>;
};

export default App;
