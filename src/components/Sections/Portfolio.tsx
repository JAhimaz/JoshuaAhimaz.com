import styled from "styled-components"

type PortfolioType = {
  className?: string
}

const Portfolio = ({className} : PortfolioType) => {
  return (
    <aside className={className}>
      Portfolio
    </aside>
  )
}

const StyledPortfolio = styled(Portfolio)`
flex-grow: 1;
padding: 1.5em 10em 3em 4em;
display: flex;
flex-direction: column;
overflow: auto;

`

export default StyledPortfolio