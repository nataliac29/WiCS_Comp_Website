import React, { useCallback } from 'react'
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap'
import { Link } from 'react-scroll'
import { MenuContainer } from '../styles'
import './custom.css'

const WomenResourcesMenu = ({ toggle, onTabChange }) => {
  const handleTabChange = useCallback(() => {
    onTabChange('4')
  }, [onTabChange])
  return (
    <div>
      <MenuContainer className="menu-btn">
        <Button className="button" onClick={handleTabChange}>
          <div className="text-btn">Women in CS</div>
        </Button>
        <Collapse isOpen={toggle === '4'}>
          <Card style={{ marginTop: '1.2vh' }}>
            <CardBody>
              <div>
                <Link to="girls_who_code" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
                  Girls Who Code
                </Link>
              </div>
              <div>
                <Link to="WECode" smooth class="Subheading" style={{ color: '#e36154', cursor: 'pointer' }}>
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
