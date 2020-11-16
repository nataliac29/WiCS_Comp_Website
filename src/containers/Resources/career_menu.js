import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { MenuContainer } from './styles'
import 'bootstrap/dist/css/bootstrap.css'

const CareerResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Career Resources!</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              List career resources here!
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default CareerResourcesMenu
