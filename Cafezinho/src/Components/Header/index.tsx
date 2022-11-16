import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.png'
import { CardCity, CartButton, Container, ContainerCard } from './style'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <ContainerCard>
        <CardCity>
          <MapPin size={22} />
          <span>Porto Alegre, RS</span>
        </CardCity>
        <CartButton>
          <a href="http://127.0.0.1:5173/checkout">
            <span>
              <ShoppingCart size={22} weight={'fill'} />
            </span>
          </a>
        </CartButton>
      </ContainerCard>
    </Container>
  )
}
