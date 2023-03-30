import styled from 'styled-components';
export const HeaderContainer = styled.div`
  max-width: 70rem;
  margin: 0rem auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* height: 6.5rem; */
  padding-block: 2rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      text-decoration: none;
    }
  }
`;

const BaseLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  cursor: pointer;
  text-decoration: none;
`;

export const LinkCurrentLocation = styled(BaseLink)`
  background: ${(props) => props.theme['brand-purple-light']};
  color: ${(props) => props.theme['brand-purple-dark']};
  svg {
    color: ${(props) => props.theme['brand-purple']};
  }
`;

export const LinkCart = styled(BaseLink)`
  background: ${(props) => props.theme['brand-yellow-light']};
  color: ${(props) => props.theme['brand-yellow-dark']};
  position: relative;

  span {
    position: absolute;
    right: -0.525rem;
    top: -0.525rem;
    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme['brand-yellow-dark']};
    color: ${(props) => props.theme['base-white']};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
  }
`;
