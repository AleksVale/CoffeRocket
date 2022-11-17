import cafe from '../../assets/arabe.png'
import { Container } from './style'

export function Cafe() {
  return (
    <Container>
      <img src={cafe} alt="" />
      <p>tag</p>
      <span>O tradicional café feito com água quente e grãos moídos</span>
      <div>
        <p>
          R$ <span>9,90</span>
        </p>
        <p>
          <button>-</button> <span>1</span> <button>+</button>
        </p>
        <p>Carrinho</p>
      </div>
    </Container>
  )
}
