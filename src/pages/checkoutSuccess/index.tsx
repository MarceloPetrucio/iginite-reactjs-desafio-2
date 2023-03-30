import { CheckoutSuccessContainer, CardCheckoutSuccess } from './styles';
import { TitleL, TextRegularL, TextRegularM } from '../../styles/text';
import illustration from './../../assets/Illustration.svg';
import { CardCheckoutSuccessDetail } from './components/CardCheckoutSuccessDetail/index';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function CheckoutSuccess() {
  const { deliveryAddress, payment } = useContext(CartContext);

  return (
    <CheckoutSuccessContainer>
      <header>
        <TitleL className="title">Uhu! Pedido confirmado</TitleL>
        <TextRegularL>
          Agora é só aguardar que logo o café chegará até você
        </TextRegularL>
      </header>

      <main>
        <CardCheckoutSuccess>
          <CardCheckoutSuccessDetail
            icon={<MapPin weight="fill" size={16} />}
            color="purple"
          >
            <TextRegularM>
              Entrega em{' '}
              <strong>
                Rua {deliveryAddress?.rua}, {deliveryAddress?.numero}
              </strong>
            </TextRegularM>
            <TextRegularM>
              {deliveryAddress?.bairro} - {deliveryAddress?.cidade},{' '}
              {deliveryAddress?.uf}
            </TextRegularM>
          </CardCheckoutSuccessDetail>

          <CardCheckoutSuccessDetail
            icon={<Timer weight="fill" size={16} />}
            color="yellow"
          >
            <TextRegularM>Previsão de entrega</TextRegularM>
            <TextRegularM>
              <strong>20 min - 30 min</strong>
            </TextRegularM>
          </CardCheckoutSuccessDetail>

          <CardCheckoutSuccessDetail
            icon={<CurrencyDollar weight="fill" size={16} />}
            color="yellow-dark"
          >
            <TextRegularM>Pagamento na entrega</TextRegularM>
            <TextRegularM>
              <strong>{payment?.name}</strong>
            </TextRegularM>
          </CardCheckoutSuccessDetail>
        </CardCheckoutSuccess>
        <img src={illustration} alt="" />
      </main>
    </CheckoutSuccessContainer>
  );
}
