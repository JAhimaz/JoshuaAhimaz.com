import styled from 'styled-components'

const OptionsSection = ({ className } : { className ?: string }) => {
  return (
    <section className={className}>
      <ul className="options-list">
        <li className="option"><span className='hover-arrow'>_</span>ABOUT</li>
        <li className="option"><span className='hover-arrow'>_</span>EXPERIENCE</li>
        <li className="option"><span className='hover-arrow'>_</span>PORTFOLIO</li>
        <li className="option"><span className='hover-arrow'>_</span>CONTACT</li>
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
    font-size: 180px;
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