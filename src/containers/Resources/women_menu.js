import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
import { MenuContainer } from './styles'
import './custom.css'

const WomenResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={toggle}>
          <div className="text-btn">Women in CS</div>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card style={{ marginTop: '1.2vh' }}>
            <CardBody>
              <div>
                <Link to="girls_who_code" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Girls Who Code
                </Link>
              </div>
              <div>
                <Link to="WECode" smooth class="Subheading" style={{ color: '#e36154' }}>
                  WECode
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
