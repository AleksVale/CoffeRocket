import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 3.5rem;
  justify-content: space-between;
  padding-top: 3.875rem;
  div {
    flex: 0 0 50%;
  }

  h1 {
    font-family: 'Baloo', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-top: 1rem;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-top: 4.125rem;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  gap: 1rem;
`
export const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.4rem;
  border-radius: 100%;
  color: ${(props) => props.theme.white};

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const IconCart = styled(Icon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const IconCoffe = styled(Icon)`
  background-color: ${(props) => props.theme['purple-dark']};
`
export const IconSquare = styled(Icon)`
  background-color: ${(props) => props.theme['base-text']};
`
export const IconClock = styled(Icon)`
  background-color: ${(props) => props.theme.yellow};
`

// PRIMEIRA SESSÃO

export const Second = styled.div`
  padding-top: 20rem;
`
