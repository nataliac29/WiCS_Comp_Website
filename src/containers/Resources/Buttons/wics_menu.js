import React, { useCallback } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
import { MenuContainer } from '../styles'

const WicsResourcesMenu = ({ toggle, onTabChange }) => {
  const handleTabChange = useCallback(() => {
    onTabChange('1')
  }, [onTabChange])
  return (
    <div>
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={handleTabChange}>
          <div className="text-btn">WiCS</div>
        </Button>
        <Collapse isOpen={toggle === '1'}>
          <Card style={{ marginTop: '1.2vh' }}>
            <CardBody>
              <div>
                <Link to="mentorships" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
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
