import React, { useCallback } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
import { MenuContainer } from '../styles'

const CareerResourcesMenu = ({ toggle, onTabChange }) => {
  // eslint-disable-next-line
  const handleTabChange = useCallback(() => (toggle === '2' ? onTabChange('') : onTabChange('2')), [onTabChange])
  return (
    <div>
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={handleTabChange}>
          <div className="text-btn">Careers</div>
        </Button>
        <Collapse isOpen={toggle === '2'}>
          <Card style={{ marginTop: '1.2vh' }}>
            <CardBody>
              <div>
                <Link to="career_paths" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
                  Career Paths
                </Link>
              </div>
              <div>
                <Link to="referrals" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
                  Referrals
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
