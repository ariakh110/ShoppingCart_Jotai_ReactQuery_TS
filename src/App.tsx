import React from "react";
import { atom, useAtom, useAtomValue } from 'jotai';
import { useQuery } from 'react-query';
import * as _ from 'lodash';
//
import * as atoms from './store'
import * as api from './api/api'
import { useProducts, CartItemType } from './hooks';
//material-ui
import Drawer from '@mui/material/Drawer';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
//component
import Item from './Item/Item'
import Cart from './Cart/Cart'
// styles 
import { Wrapper, StyledButton } from './App.styles'



const cartOpenAtom = atom(false);
const cartItemAtom = atom([] as CartItemType[]);

const App = () => {
  const { data: products, isLoading, error } = useProducts();
  const [cartOpen, setCartOpen] = useAtom(cartOpenAtom);
  const [cartItems, setCartItems] = useAtom(cartItemAtom);

  // const pro = useAtomValue(atoms.getProducts);
  // const [allProducts,setAllProducts] = atom<[]>(products);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(() => {
      const existingItem = cartItems.find(item => item.id === clickedItem.id);
      if (existingItem) {
        return _.map(cartItems, item => item.id === existingItem.id ? { ...item, amount: item.amount + 1 } : item);
      } else {
        return [...cartItems, { ...clickedItem, amount: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(() => (
      cartItems.reduce((acc, item) => {
        if (item.id === id) {

          if (item.amount === 1)
            return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    ));
  }


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
          ? <Wrapper>
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
              <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color="secondary">
                <AddShoppingCart />
              </Badge>
            </StyledButton>
            <Grid container spacing={3}>
              {
                _.map(products, (product: any) => (
                  <Grid item key={product.id} xs={12} sm={4}>
                    <Item item={product} handleAddToCart={handleAddToCart} />
                  </Grid>
                ))
              }
            </Grid>
          </Wrapper>
          : <div >Loading...</div>
      }
    </>
  );
}


export default App;
