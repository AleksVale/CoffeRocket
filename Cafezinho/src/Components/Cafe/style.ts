import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  text-align: center;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  margin-bottom: 2.5rem;
`
export const Imagem = styled.div`
  margin-top: -30px;
`
export const Tag = styled.p`
  padding: 0.75rem 0 1rem;
  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    font-size: 0.625rem;
  }
`
export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`
export const Description = styled.div`
  padding: 0.5rem 1.25rem 2rem;
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`
export const LastDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem 1.5rem;
  align-items: center;
`
export const Pricing = styled.p`
  font-size: 0.875rem;
  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const Buttons = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  button {
    background: none;
    border: none;
    outline: none;
    color: ${(props) => props.theme.purple};
    font-size: 1.25rem;
    cursor: pointer;
    transition: color 0.1s linear;

    &:hover{
      color: ${(props) => props.theme['purple-dark']}
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const CartButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};
  border: none;
  padding: 0.5rem 0.5rem 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
