import React, { useEffect } from "react";
import { atom, useAtom, useAtomValue } from 'jotai';
import { useQuery } from 'react-query';
import * as _ from 'lodash';
//
import * as atoms from './store'
import * as api from './api/api'
import { useProducts } from "./hooks";
//material-ui
import Drawer from '@mui/material/Drawer';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
// styles 
import { Wrapper } from './App.styles'

const App = () => {
  const { data: products, isLoading, error } = useProducts();
  // const pro = useAtomValue(atoms.getProducts);
  // const [allProducts,setAllProducts] = atom<[]>(products);

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;


  if (isLoading) return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <CircularProgress />
      </Box>
    </>
  )
  if (error) return <div>Error!</div>

  return (
    <>
      {
        products !== undefined
          ? _.map(products, (product: any) => (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          ))
          : <div >Loading...</div>
      }
    </>
  );
}


export default App;
