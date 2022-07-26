import styled from "styled-components"

type AboutType = {
  className?: string
}

const About = ({className} : AboutType) => {
  return (
    <aside className={className}>
      <header>About Me_</header>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc turpis, luctus quis tincidunt at, interdum et velit. Nam vel scelerisque nulla. Sed sit amet ultrices odio. Mauris sagittis tellus mi, non euismod ante laoreet sed. Curabitur pellentesque ultrices lacinia. Cras gravida varius sagittis. Fusce arcu lacus, convallis non turpis a, facilisis dictum ligula. Suspendisse placerat turpis vitae quam gravida, a pulvinar lorem vestibulum. Pellentesque tempus tempor lorem sit amet feugiat. Mauris vehicula, augue dignissim vestibulum dictum, tortor lacus lacinia ipsum, semper tempor diam lacus at velit. Nunc pellentesque pretium tempus. Cras fringilla metus in ligula vehicula viverra. Donec laoreet libero ac mollis viverra. Proin fringilla dui vitae sodales accumsan. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc turpis, luctus quis tincidunt at, interdum et velit. Nam vel scelerisque nulla. Sed sit amet ultrices odio. Mauris sagittis tellus mi, non euismod ante laoreet sed. Curabitur pellentesque ultrices lacinia. Cras gravida varius sagittis. Fusce arcu lacus, convallis non turpis a, facilisis dictum ligula. Suspendisse placerat turpis vitae quam gravida, a pulvinar lorem vestibulum. Pellentesque tempus tempor lorem sit amet feugiat. Mauris vehicula, augue dignissim vestibulum dictum, tortor lacus lacinia ipsum, semper tempor diam lacus at velit. Nunc pellentesque pretium tempus. Cras fringilla metus in ligula vehicula viverra. Donec laoreet libero ac mollis viverra. Proin fringilla dui vitae sodales accumsan. </p>
      </section>
    </aside>
  )
}

const StyledAbout = styled(About)`
flex-grow: 1;
padding: 1.5em 10em 3em 4em;
display: flex;
flex-direction: column;
overflow: auto;

> header {
  font-size: 50px;
}

p {
  font-size: 18px;
  text-align: justify;
}
`

export default StyledAbout