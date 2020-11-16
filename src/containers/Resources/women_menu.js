import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { MenuContainer } from './styles'
import 'bootstrap/dist/css/bootstrap.css'

const WomenResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Women in CS Resources!</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              List women in CS resources and their links here!
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default WomenResourcesMenu
