import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-scroll'
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
              <div>
                <Link to="coding_practice" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Coding Practice
                </Link>
              </div>
              <div>
                <Link to="interview_prep" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Interview Prep
                </Link>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default CodeResourcesMenu
