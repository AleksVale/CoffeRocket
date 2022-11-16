import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`
export const ContainerCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export const CardCity = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.4rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  span {
    font-size: 1.14rem;
  }
`

export const CartButton = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme['yellow-light']};

  border-radius: 6px;
  a {
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.4rem;
  }
`
