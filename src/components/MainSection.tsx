import styled from 'styled-components'
import OptionsSection from './Options'

const MainSection = ({ className } : { className ?: string }) => {

  return (
    <div className={className}>
      <aside>
        <div>
          <p className="aside-name"><span>JOSHUA</span> DAVESTON AHIMAZ</p>
          <p className="aside-company">Talisman / Serverminer</p>
        </div>
        <div>
          <p className="technicals">web3 enthusiast_</p>
          <p className="technicals">software engineer_</p>
          <p className="technicals">game developer_</p>
        </div>
      </aside>
      <OptionsSection />
    </div>
  )
}

const StyledMainSection = styled(MainSection)`
  display: flex;
  flex-direction: row;
  height: 90vh;
  overflow: hidden;

  p {
    margin: 0;
  }

  aside {
    flex-grow: 1;
    padding: 1.5em 0 3em 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .aside-name {
    font-size: 48px;
  }

  .aside-company {
    font-size: 24px;
  }

  .technicals {
    font-size: 32px;
  }

`

export default StyledMainSection