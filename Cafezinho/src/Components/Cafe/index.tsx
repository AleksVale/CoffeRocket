import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  Buttons,
  CartButton,
  Container,
  Description,
  Imagem,
  LastDiv,
  Pricing,
  Tag,
  Title,
  Wrapper,
} from './style'
interface cafeProps {
  image: string
  tags: string[]
  name: string
  description: string
}

export function Cafe(props: cafeProps) {
  const [count, setCount] = useState(1)
  function plusOrder() {
    setCount(count + 1)
  }

  function minusOrder() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <Container>
      <Imagem>
        <img src={props.image} alt="" />
      </Imagem>
      <Tag>
        {props.tags.map((tag) => (
          <span key={props.name}>{tag}</span>
        ))}
      </Tag>
      <Title>{props.name}</Title>
      <Description>
        <span>{props.description}</span>
      </Description>
      <LastDiv>
        <Pricing>
          R$ <span>9,90</span>
        </Pricing>
        <Wrapper>
          <Buttons>
            <button onClick={minusOrder}>
              <Minus size={14} />
            </button>
            <span>{count}</span>
            <button onClick={plusOrder}>
              <Plus size={14} />
            </button>
          </Buttons>
          <CartButton>
            <ShoppingCart size={20} weight={'fill'} />
          </CartButton>
        </Wrapper>
      </LastDiv>
    </Container>
  )
}
