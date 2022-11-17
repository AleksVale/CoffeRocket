import {
  Coffes,
  Container,
  IconCart,
  IconClock,
  IconCoffe,
  IconSquare,
  Second,
  Tag,
  Tags,
} from './style'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BigCoffe from '../../assets/Imagem.png'
import { Cafe } from '../../Components/Cafe'

export function Home() {
  return (
    <>
      <Container>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Tags>
            <div>
              <Tag>
                <IconCart>
                  <ShoppingCart size={16} weight={'fill'} />
                </IconCart>
                <span>Compra simples e segura</span>
              </Tag>
              <Tag>
                <IconClock>
                  <Timer size={16} weight="fill" />
                </IconClock>
                <span>Entrega rápida e rastreada</span>
              </Tag>
            </div>
            <div>
              <Tag>
                <IconSquare>
                  <Package size={16} weight="fill" />
                </IconSquare>
                <span>Embalagem mantém o café intacto</span>
              </Tag>
              <Tag>
                <IconCoffe>
                  <Coffee size={16} weight="fill" />
                </IconCoffe>
                <span>O café chega fresquinho até você</span>
              </Tag>
            </div>
          </Tags>
        </div>

        <div>
          <img src={BigCoffe} alt="" />
        </div>
      </Container>
      <Second>
        <h1>Nossos cafés</h1>
        <Coffes>
          <Cafe />
          <Cafe />
          <Cafe />
          <Cafe />
        </Coffes>
      </Second>
    </>
  )
}
