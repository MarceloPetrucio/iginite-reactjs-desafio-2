import {
  CheckoutContainer,
  CardContainer,
  CardInformationOrder,
  InputContainer,
  TextFieldContainer,
  StyledInput,
  StyledInnerLabel,
  CardProductCart,
  ProductCounter,
  ButtonRemove,
  CheckoutAmountContainer,
  CardPayment,
  CardResume,
  ButtonTypePayment,
} from './styles';
import {
  TitleXS,
  TextRegularM,
  TextRegularS,
  TextButtonS,
  TextBoldM,
} from '../../styles/text';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
  Plus,
  Minus,
} from 'phosphor-react';
import ImgCoffeeMochaccino from './../../assets/coffees/mochaccino.png';
import { TextBoldL } from '../../styles/text';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import {
  CartContext,
  CartItem,
  DeliveryAddress,
} from '../../context/CartContext';
import { formatDecimal } from '../../util/format';
import { Coffee } from '../../shared/list-coffee';
import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const addressFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Informe o CEP'),
  rua: zod.string(),
  complemento: zod.string().optional(),
  numero: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),

  // minutesAmount: zod
  //   .number()
  //   .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
  //   .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
});

export function Checkout() {
  const {
    listItem,
    amoutItens,
    dropItem,
    addQtdItem,
    subQtdItem,
    payment,
    selectPayment,

    createDeliveryAddress,
    deliveryAddress,
  } = useContext(CartContext);

  const deliveryAddressForm = useForm<DeliveryAddress>({
    resolver: zodResolver(addressFormValidationSchema),
  });

  const { handleSubmit, watch, reset, register, setValue } =
    deliveryAddressForm;
  const navigate = useNavigate();

  useEffect(() => {
    if (deliveryAddress)
      Object.entries(deliveryAddress).forEach(([name, value]) =>
        setValue(name as keyof DeliveryAddress, value),
      );
  }, []);

  function handleCreateDeliveryAddress(data: DeliveryAddress) {
    const { cep, rua, numero, complemento, bairro, cidade, uf } = data;

    createDeliveryAddress({
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
    });

    // reset();
    navigate('/checkout-success');
  }

  function handleRemoveItem(item: CartItem) {
    dropItem({
      id: item.id,
    });
  }

  function handleAddQtdItem(item: CartItem) {
    addQtdItem({
      id: item.id,
    });
  }

  function handleSelectPayment(id: number) {
    selectPayment(id);
  }

  return (
    <CheckoutContainer>
      <div>
        <TitleXS>Complete seu pedido</TitleXS>
        <div>
          <CardInformationOrder>
            <header>
              <MapPinLine size={22} />
              <div>
                <TextRegularM>Endereço de Entrega</TextRegularM>
                <TextRegularS>
                  Informe o endereço onde deseja receber seu pedido
                </TextRegularS>
              </div>
            </header>

            <main>
              <InputContainer
                sizeField="12.5rem"
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />

              <InputContainer
                sizeField="100%"
                type="text"
                placeholder="Rua"
                {...register('rua')}
              />

              <div>
                <InputContainer
                  sizeField="12.5rem"
                  type="text"
                  placeholder="Número"
                  {...register('numero')}
                />
                <TextFieldContainer>
                  <StyledInput
                    type="text"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                  <StyledInnerLabel className="suffix">
                    Opcional
                  </StyledInnerLabel>
                </TextFieldContainer>
              </div>

              <div>
                <InputContainer
                  sizeField="12.5rem"
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <InputContainer
                  fullField={true}
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <InputContainer
                  sizeField="3.75rem"
                  upperCase={true}
                  type="text"
                  placeholder="UF"
                  {...register('uf')}
                />
              </div>
            </main>
          </CardInformationOrder>

          <CardPayment>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <TextRegularM>Pagamento</TextRegularM>
                <TextRegularS>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextRegularS>
              </div>
            </header>

            <main>
              <ButtonTypePayment
                selected={payment?.id === 1}
                onClick={() => handleSelectPayment(1)}
              >
                <CreditCard />
                <TextButtonS>Cartão de crédito</TextButtonS>
              </ButtonTypePayment>

              <ButtonTypePayment
                selected={payment?.id === 2}
                onClick={() => handleSelectPayment(2)}
              >
                <Bank />
                <TextButtonS>Cartão de débito</TextButtonS>
              </ButtonTypePayment>

              <ButtonTypePayment
                selected={payment?.id === 3}
                onClick={() => handleSelectPayment(3)}
              >
                <Money />
                <TextButtonS>Dinheiro</TextButtonS>
              </ButtonTypePayment>
            </main>
          </CardPayment>
        </div>
      </div>

      <div>
        <TitleXS>Cafés selecionados</TitleXS>
        <CardResume>
          {listItem.map((item) => {
            const coffee = item.coffee;

            return (
              <CardProductCart key={item.id}>
                <main>
                  <div>
                    <img src={coffee.image} alt="" />
                    <div>
                      <TextRegularM className="title">
                        {coffee.title}
                      </TextRegularM>
                      <div>
                        <ProductCounter>
                          <button onClick={() => subQtdItem(item)}>
                            <Minus />
                          </button>
                          <span>
                            <TextRegularM>{item.qtd}</TextRegularM>
                          </span>
                          <button onClick={() => handleAddQtdItem(item)}>
                            <Plus />
                          </button>
                        </ProductCounter>

                        <ButtonRemove onClick={() => handleRemoveItem(item)}>
                          <Trash />
                          <span>Remover</span>
                        </ButtonRemove>
                      </div>
                    </div>
                  </div>
                  <TextBoldM>R$ {formatDecimal(item.amount)}</TextBoldM>
                </main>
              </CardProductCart>
            );
          })}

          {listItem.length === 0 && <div>Nenhum Café Adicionado</div>}

          <CheckoutAmountContainer>
            <div>
              <TextRegularS>Total de itens</TextRegularS>
              <TextRegularM>R$ {formatDecimal(amoutItens)}</TextRegularM>
            </div>

            <div>
              <TextRegularS>Entrega</TextRegularS>
              <TextRegularM>R$ 3,50</TextRegularM>
            </div>

            <div>
              <TextBoldL>Total</TextBoldL>
              <TextBoldL>R$ {formatDecimal(amoutItens + 3.5)}</TextBoldL>
            </div>
          </CheckoutAmountContainer>

          <NavLink
            to="/checkout-success"
            title="Checkout Success"
            onClick={handleSubmit(handleCreateDeliveryAddress)}
          >
            Confirmar Pedido
          </NavLink>
        </CardResume>
      </div>
    </CheckoutContainer>
  );
}
