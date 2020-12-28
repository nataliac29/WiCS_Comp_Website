import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
import { MenuContainer } from './styles'

const WicsResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>WiCS Resources!</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <div>
                <Link to="mentorships" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Mentorships
                </Link>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default WicsResourcesMenu
