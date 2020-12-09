import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
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
              <div>
                <Link to="women_spotlight" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Spotlight
                </Link>
              </div>
              <div>
                <Link to="women_facts" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Facts & Figures
                </Link>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default WomenResourcesMenu
