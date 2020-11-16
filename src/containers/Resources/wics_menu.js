import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { MenuContainer } from './styles'

const WicsResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>WiCS Resources!!</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <p>
                Mentorships
              </p>
              <p>
                Group Outings
              </p>
              <p>
                Leadership Opportunities
              </p>
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default WicsResourcesMenu
