import styled from "styled-components"

type ExperienceType = {
  className?: string
}

const Experience = ({className} : ExperienceType) => {
  return (
    <aside className={className}>
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>  
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>

    </aside>
  )
}

const StyledExperience = styled(Experience)`
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.5em 10em 3em 4em;
  display: grid;
  grid-template-columns: auto;
  gap: 20px 20px;

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    height: 100%;
  }
`

export default StyledExperience