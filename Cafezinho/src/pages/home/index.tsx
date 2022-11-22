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
import arabe from '../../assets/arabe.png'
import cafeLeite from '../../assets/cafeLeite.png'
import capuccino from '../../assets/capuccino.png'
import chocolateQuente from '../../assets/chocolateQuente.png'
import cubano from '../../assets/cubano.png'
import expressoAmericano from '../../assets/expressoAmericano.png'
import expressoCremoso from '../../assets/expressoCremoso.png'
import expressoGelado from '../../assets/expressoGelado.png'
import expressoTradicional from '../../assets/expressoTradicional.png'
import havaiano from '../../assets/havaiano.png'
import irlandes from '../../assets/irlandes.png'
import latte from '../../assets/latte.png'
import machiatto from '../../assets/machiatto.png'
import mocaccino from '../../assets/mocaccino.png'

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
          <Cafe
            name="Expresso Tradicional"
            tags={['TRADICIONAL']}
            description="O tradicional café feito com água quente e grãos moídos"
            image={expressoTradicional}
          />
          <Cafe
            name="Expresso Americano"
            tags={['TRADICIONAL']}
            description="Expresso diluído, menos intenso que o tradicional"
            image={expressoAmericano}
          />
          <Cafe
            name="Expresso Cremoso"
            tags={['TRADICIONAL']}
            description="Café expresso tradicional com espuma cremosa"
            image={expressoCremoso}
          />
          <Cafe
            name="Expresso Gelado"
            tags={['TRADICIONAL, GELADO']}
            description="Bebida preparada com café expresso e cubos de gelo"
            image={expressoGelado}
          />
          <Cafe
            name="Cafe com Leite"
            tags={['TRADICIONAL, COM LEITE']}
            description="Meio a meio de expresso tradicional com leite vaporizado"
            image={cafeLeite}
          />
          <Cafe
            name="Latte"
            tags={['TRADICIONAL, COM LEITE']}
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            image={latte}
          />
          <Cafe
            name="Capuccino"
            tags={['TRADICIONAL, COM LEITE']}
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            image={capuccino}
          />
          <Cafe
            name="Macchiato"
            tags={['TRADICIONAL, COM LEITE']}
            description="Café expresso misturado com um pouco de leite quente e espuma"
            image={machiatto}
          />
          <Cafe
            name="Mocaccino"
            tags={['TRADICIONAL, COM LEITE']}
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            image={mocaccino}
          />
          <Cafe
            name="Chocolate Quente"
            tags={['ESPECIAL, COM LEITE']}
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            image={chocolateQuente}
          />
          <Cafe
            name="Cubano"
            tags={['ESPECIAL, ALCÓOLICO, COM LEITE']}
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            image={cubano}
          />
          <Cafe
            name="Havaiano"
            tags={['ESPECIAL']}
            description="Bebida adocicada preparada com café e leite de coco"
            image={havaiano}
          />
          <Cafe
            name="Árabe"
            tags={['ESPECIAL']}
            description="Bebida preparada com grãos de café árabe e especiarias"
            image={arabe}
          />
          <Cafe
            name="Irlandês"
            tags={['ESPECIAL, ALCÓOLICO']}
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            image={irlandes}
          />
        </Coffes>
      </Second>
    </>
  )
}
