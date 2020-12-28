import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
import { MenuContainer } from './styles'

const CareerResourcesMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={toggle}>
          <div className="text-btn">Careers</div>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card style={{ marginTop: '1.2vh' }}>
            <CardBody>
              <div>
                <Link to="career_paths" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Career Paths
                </Link>
              </div>
              <div>
                <Link to="referrals" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Referrals
                </Link>
              </div>
              <div>
                <Link to="internship_opportunities" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Internship Opportunities
                </Link>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </MenuContainer>
    </div>
  )
}

export default CareerResourcesMenu
