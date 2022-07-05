import styled from 'styled-components'

const Navigation = ({ className } : { className ?: string }) => {

  return (
    <div className={className}>
      <div className="line-item">
        <div className="line" />
      </div>
      <div className="navigation-items">
        <a href="#">GITHUB</a>
        <a href="#">LINKEDIN</a>
        <a href="#">TWITTER</a>
      </div>
    </div>
  )
}

const StyledNavigation = styled(Navigation)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0.5em;

  a {
    font-size: 18px;
    color: rgb(120, 120, 120);
  }

  a:hover {
    font-size: 20px;
    color: rgb(245, 245, 245);
  }

  .line-item {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 6;

  }

  .line {
    width: 95%;
    height: 1px;
    background-color: rgb(245, 245, 245);
  }

  .navigation-items {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
  }
`

export default StyledNavigation