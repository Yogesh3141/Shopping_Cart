
import { useContext, createContext, ReactNode, useState, } from 'react';

type ShoppingcartProviderProps={
children:ReactNode
}

type Cartitem={
    id:number
    name:string
    quantity:number
}

type ShoppingcartContext ={
    getItemQuantity:(id:number)=>number
    incresscartQuantity:(id:number)=>void
    decresscartQuantity:(id:number)=>void
    removeFromcart:(id:number)=>void
}
const ShoppingcartContext = createContext({})

export const useShoppingCart=()=>{
    return useContext(ShoppingcartContext)
}

export const ShoppingCartProvider=({children}:ShoppingcartProviderProps)=>{

 const[cartitem,setcartitem]=useState<Cartitem[]>([])
 
const getItemQuantity=(id:number)=>{
    return(
        cartitem.find(item=> item.id ===id)?.quantity ||0
    )
}

 return (
   <ShoppingcartContext.Provider value={{getItemQuantity}}>
    {children}
 </ShoppingcartContext.Provider>
 )
}