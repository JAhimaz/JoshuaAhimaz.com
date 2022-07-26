import styled from 'styled-components'

type OptionsProps = {
  className ?: string,
  handleSectionChange ?: (value: string) => void
}

const OptionsSection = ({ className, handleSectionChange } : OptionsProps) => {

  return (
    <section className={className}>
      <ul className="options-list">
        <li className="option" onClick={() => handleSectionChange("about")}><span className='hover-arrow'>_</span>ABOUT</li>
        <li className="option" onClick={() => handleSectionChange("experience")}><span className='hover-arrow'>_</span>EXPERIENCE</li>
        <li className="option" onClick={() => handleSectionChange("portfolio")}><span className='hover-arrow'>_</span>PORTFOLIO</li>
        <li className="option" onClick={() => handleSectionChange("contact")}><span className='hover-arrow'>_</span>CONTACT</li>
      </ul>
    </section>
  )
}

const StyledOptions = styled(OptionsSection)`


  .hover-arrow {
    opacity: 0;
    font-size: 64px;
  }

  .option {
    font-size: 154px;
    margin-right: -30px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    -webkit-text-fill-color: transparent;
    transition: 0.3s;
  }

  .option:hover {
    transform-origin: center right;
    transform: scale(1.15);
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: transparent;
    cursor: pointer;

    > .hover-arrow {
      opacity: 100;
    }
  }

  li {
    display: block;
    text-align: right;
  }

  section {
    flex-grow: 2;
  }
`

export default StyledOptions