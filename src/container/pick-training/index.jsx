import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: black;
`

const PickTraining = () => (
  <Container>
    <StyledLink to="/day/a"> Training A </StyledLink>
    <StyledLink to="/day/b"> Training B </StyledLink>
  </Container>
)
export default PickTraining
