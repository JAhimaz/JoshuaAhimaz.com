import { useState } from 'react'
import styled from 'styled-components'
import OptionsSection from './Options'
import { About, Contact, Experience, Portfolio } from './Sections'

const MainSection = ({ className } : { className ?: string }) => {

  const [selectedSection, setSelectedSection] = useState("about")

  const handleSectionChange = (section: string) => {
    setSelectedSection(section)
  }

  return (
    <div className={className}>
      {
      selectedSection === "about" ? <About /> :
      selectedSection === "experience" ? <Experience /> :
      selectedSection === "portfolio" ? <Portfolio /> :
      selectedSection === "contact" ? <Contact /> :
      <About />
      }
      <OptionsSection handleSectionChange={(value) => handleSectionChange(value)} />
    </div>
  )
}

const StyledMainSection = styled(MainSection)`
  display: flex;
  flex-direction: row;
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export default StyledMainSection