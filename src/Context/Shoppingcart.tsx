
import { useContext, createContext, ReactNode, useState, } from 'react';
import { Shoppingcart } from '../Components/Shoppingcart';
import { CartItem } from '../Components/CartItem';

type ShoppingcartProviderProps = {
    children: ReactNode
}

type Cartitem = {
    id: number
    quantity: number
}

type ShoppingcartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    incresscartQuantity: (id: number) => void
    decresscartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartquantity: number
    cartitems: Cartitem[]
}
const ShoppingcartContext = createContext({} as ShoppingcartContext)

export const useShoppingCart = () => {
    return useContext(ShoppingcartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingcartProviderProps) => {

    const [cartitem, setcartitem] = useState<Cartitem[]>([])

    const cartQuantity = cartitem.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )

    const [isopen, setisopen] = useState(false)

    const openCart = () => setisopen(true)

    const closeCart = () => setisopen(false)

    const getItemQuantity = (id: number) => {
        return (
            cartitem.find(item => item.id === id)?.quantity || 0
        )
    }

    const incresscartQuantity = (id: number) => {
        setcartitem(cartitem => {
            if (cartitem.find(item => item.id === id) == null) {
              return [...cartitem, { id, quantity: 1 }]
            } else {
              return cartitem.map(item => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
              })
            }
          })
        }
    const decresscartQuantity = (id: number) => {
        return (
            setcartitem(cartitem => {
                if (cartitem.find(item => item.id === id)?.quantity === 1)
                    return cartitem.filter(item => item.id !== id)
                else {
                    return cartitem.map(item => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity - 1 }
                        }
                        else {
                            return item
                        }
                    })
                }
            })
        )
    }

    const removeFromCart = (id: number) => {
        setcartitem(cartitem => {
            return cartitem.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingcartContext.Provider
            value={{
                openCart,
                getItemQuantity,
                closeCart,
                incresscartQuantity,
                decresscartQuantity,
                removeFromCart: removeFromCart,
                cartquantity: cartQuantity,
                cartitems: cartitem
            }}>
            {children}
            <Shoppingcart isOpen={isopen} />
        </ShoppingcartContext.Provider>
    )
}