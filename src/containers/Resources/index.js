import React, { useState } from 'react'
import WicsResourcesMenu from './Buttons/wics_menu'
import CareerResourcesMenu from './Buttons/career_menu'
import CodeResourcesMenu from './Buttons/code_menu'
import WomenResourcesMenu from './Buttons/women_menu'
import CareerResources from './ResourceTabs/career_resources'
import CodeResources from './ResourceTabs/code_resources'
import WicsResources from './ResourceTabs/wics_resources'
import WomenCS from './ResourceTabs/women_in_cs'
import { DropdownButtons, Welcome } from './styles'

const Resources = () => {
  const [toggle, setToggle] = useState('')
  return (
    <>
      <Welcome className="welcome">Resources</Welcome>
      <DropdownButtons className="dropdown-btn">
        <WicsResourcesMenu toggle={toggle} onTabChange={setToggle} />
        <CareerResourcesMenu toggle={toggle} onTabChange={setToggle} />
        <CodeResourcesMenu toggle={toggle} onTabChange={setToggle} />
        <WomenResourcesMenu toggle={toggle} onTabChange={setToggle} />
      </DropdownButtons>
      <WicsResources />
      <CareerResources />
      <CodeResources />
      <WomenCS />
    </>
  )
}
export default Resources
