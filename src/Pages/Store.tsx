import React from 'react'
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { hello } from '../Data/Item'
import { Stack } from '@fluentui/react';
import { useShoppingCart } from '../Context/Shoppingcart';


const Store: React.FunctionComponent = () => {

  const {getItemQuantity,incresscartQuantity,decresscartQuantity,removeFromCart}:any=useShoppingCart()
  

  return (
    <>
      <Stack>
        <Row>
          <h4 className='text-primary'>Select-Items</h4>
          {hello.map(Itm => (
            <Col key={Itm.id}>
              <Card style={{ width: '20rem', marginBottom: '15px' }}>
                <Card.Img
                  variant='top'
                  src={Itm.imgUrl}
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title className='dflex justify-content-space-between align-item-baseline mb-2'>
                    <span className='fs-5'>{Itm.name}</span>
                    <span className='ms-5 text-muted'>{Itm.price}</span>
                  </Card.Title>
                  <div className='mt-auto'>
                   {getItemQuantity(Itm.id) === 0 ? (<Button onClick={()=>incresscartQuantity(Itm.id)}>+Add to cart</Button>
                   ): <div className='d-flex align-items-center flex-column' style={{gap:'.5rem'}}>
                     <div className='d-flex align-items-center justify-content-center' style={{gap:'.5rem'}}>
                      <Button onClick={()=>decresscartQuantity(Itm.id)}>-</Button>
                      <div>
                      <span className='fw-4 fs-5'>{getItemQuantity(Itm.id)}</span>In Cart
                      </div>
                      <Button onClick={()=>incresscartQuantity(Itm.id)}>+</Button>
                     </div>
                    <Button variant='danger' size='sm' onClick={()=>removeFromCart(Itm.id)}>Remove</Button>
                    </div>}
                  </div>
              </Card.Body>
            </Card>  
         </Col>
        ))}
      </Row>
    </Stack>
    </>
  )
}

export default Store





