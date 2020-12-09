import React, { useState } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
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
              <div>
                <Link to="resume_drops" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Resume Drops
                </Link>
              </div>
              <div>
                <Link to="networking" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Networking
                </Link>
              </div>
              <div>
                <Link to="job_openings" smooth class="Subheading" style={{ color: '#e36154' }}>
                  Job Openings
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
