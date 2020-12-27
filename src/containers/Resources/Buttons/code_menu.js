import React, { useCallback } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-scroll'
import { MenuContainer } from '../styles'

const CodeResourcesMenu = ({ toggle, onTabChange }) => {
  const handleTabChange = useCallback(() => {
    onTabChange('3')
  }, [onTabChange])
  return (
    <div>
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={handleTabChange}>
          <div className="text-btn">Coding</div>
        </Button>
        <Collapse isOpen={toggle === '3'}>
          <Card style={{ marginTop: '1.2vh' }}>
            <CardBody>
              <div>
                <Link to="coding_practice" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
                  Coding Practice
                </Link>
              </div>
              <div>
                <Link to="interview_prep" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
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
