import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { MenuContainer } from './styles'

const CodeResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Coding Resources!</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <p>
                Beginners
              </p>
              <p>
                Practice Coding
              </p>
              <p>
                Interview Preparation
              </p>
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default CodeResourcesMenu
