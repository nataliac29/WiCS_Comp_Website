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
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={toggle}>
          <div className="text-btn">Coding</div>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card style={{ marginTop: '1.2vh' }}>
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
