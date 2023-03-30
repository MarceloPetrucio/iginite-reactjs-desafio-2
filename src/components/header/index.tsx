import { HeaderContainer, LinkCart, LinkCurrentLocation } from './styles';

import logo from './../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { TextRegularS, TextBoldS } from '../../styles/text';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Header() {
  const { listItem } = useContext(CartContext);

  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>

      <nav>
        <NavLink to="/" title="Timer">
          <LinkCurrentLocation>
            <MapPin size={22} weight="fill" />
            <TextRegularS>Catanduva, SP</TextRegularS>
          </LinkCurrentLocation>
        </NavLink>

        <NavLink to="/checkout" title="Cart">
          <LinkCart>
            <ShoppingCart size={22} weight="fill" />
            {listItem.length > 0 ? (
              <span>
                <TextBoldS>{listItem.length}</TextBoldS>
              </span>
            ) : null}
          </LinkCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
