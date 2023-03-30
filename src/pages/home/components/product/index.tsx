import {
  ProductContainer,
  ProductFooter,
  ProductTag,
  ProductDetail,
  ProductTitle,
  ProductDescription,
  ProductPriceContainer,
  ProductPriceMoney,
  ProductPrice,
  ProductActions,
  ProductCounter,
} from './styles';

import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { TextRegularM } from '../../../../styles/text';
import { Coffee } from '../../../../shared/list-coffee';
import { formatDecimal } from '../../../../util/format';
import { useContext, useState } from 'react';
import { CartContext, CartItem } from '../../../../context/CartContext';

export interface ProductProps {
  coffee: Coffee;
}

export function Product({ coffee }: ProductProps) {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  function handleSubCounter() {
    if (counter <= 1) return;

    setCounter((counter) => counter - 1);
  }

  function handleAddCounter() {
    setCounter((counter) => counter + 1);
  }

  function handleAddCartItem() {
    addItem({
      coffee,
      qtd: counter,
    });
    setCounter(1);
  }

  return (
    <ProductContainer>
      <main>
        <img src={coffee.image} alt="" />

        <ProductTag>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag.toUpperCase()}</span>
          ))}
        </ProductTag>

        <ProductDetail>
          <ProductTitle>
            <strong>{coffee.title}</strong>
          </ProductTitle>
          <ProductDescription>{coffee.description}</ProductDescription>
        </ProductDetail>
      </main>

      <ProductFooter>
        <ProductPriceContainer>
          <ProductPriceMoney>R$</ProductPriceMoney>
          <ProductPrice>{formatDecimal(coffee.price)}</ProductPrice>
        </ProductPriceContainer>

        <ProductActions>
          <ProductCounter>
            <button onClick={handleSubCounter}>
              <Minus size={14} weight="bold" />
            </button>

            <strong>
              <TextRegularM>{counter}</TextRegularM>
            </strong>

            <button onClick={handleAddCounter}>
              <Plus size={14} weight="bold" />
            </button>
          </ProductCounter>

          <button className="addCart" onClick={handleAddCartItem}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ProductActions>
      </ProductFooter>
    </ProductContainer>
  );
}
