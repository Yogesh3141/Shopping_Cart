import { Offcanvas, OffcanvasBody, Stack } from "react-bootstrap"
import { useShoppingCart } from '../Context/Shoppingcart';
import { CartItem } from "./CartItem";
type ShoppingcartProps = {
    isOpen: boolean
}

export const Shoppingcart = ({ isOpen }: ShoppingcartProps) => {
    const { closeCart, cartitems } = useShoppingCart()
    return (
        <>
            <Offcanvas show={isOpen} onHide={closeCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <OffcanvasBody>
                    <Stack gap={3}>
                        {cartitems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </Stack>
                </OffcanvasBody>
            </Offcanvas>

        </>
    )
}