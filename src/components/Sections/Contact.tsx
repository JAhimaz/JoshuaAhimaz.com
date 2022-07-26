import styled from "styled-components"

type ContactType = {
  className?: string
}

const Contact = ({className} : ContactType) => {
  return (
    <aside className={className}>
      Contact
    </aside>
  )
}

const StyledContact = styled(Contact)`
flex-grow: 1;
padding: 1.5em 10em 3em 4em;
display: flex;
flex-direction: column;
overflow: auto;

`

export default StyledContact