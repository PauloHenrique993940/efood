import { Overlay, CartContainer, Sidebar } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <li>
          <h3>Nome do jogo</h3>
        </li>
      </ul>
      <p>2 jogo(s) no carrinho</p>
      <p>
        Total de R$ @50,00 <span>Em até 6x sem juros</span>
      </p>
      <button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </button>
    </Sidebar>
  </CartContainer>
)

export default Cart