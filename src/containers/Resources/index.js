import React from 'react'
import WicsResourcesMenu from './wics_menu'
import CareerResourcesMenu from './career_menu'
import CodeResourcesMenu from './code_menu'
import WomenResourcesMenu from './women_menu'
import CareerResources from './career_resources'
import CodeResources from './code_resources'
import WicsResources from './wics_resources'
import WomenCS from './women_in_cs'
import { DropdownButtons, Welcome } from './styles'

const Resources = () => (
  <>
    <Welcome>Resources</Welcome>
    <DropdownButtons className="dropdown-btn">
      <WicsResourcesMenu />
      <CareerResourcesMenu />
      <CodeResourcesMenu />
      <WomenResourcesMenu />
    </DropdownButtons>
    <WicsResources />
    <CareerResources />
    <CodeResources />
    <WomenCS />
  </>
)

export default Resources
