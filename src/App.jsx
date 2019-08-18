import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const AppContainer = styled.section``
const Header = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
`

const AppTitle = styled.h1`
  color: white;
  font-size: 2rem;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template: minmax(30px, 1fr) auto minmax(30px, 1fr) / minmax(30px, 1fr) 70% minmax(30px, 1fr);
  grid-template-areas: '. . .' '. content .' '. . .';
`

const Content = styled.div`
  grid-area: content;
`

const StyledLink = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
`

const App = props => {
  return (
    <AppContainer>
      <Header>
        <AppTitle>
          <StyledLink to="/">Training Assistant</StyledLink>
        </AppTitle>
      </Header>
      <ContentGrid>
        <Content>{props.children}</Content>
      </ContentGrid>
    </AppContainer>
  )
}

export default App
