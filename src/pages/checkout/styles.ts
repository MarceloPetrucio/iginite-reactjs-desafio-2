import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 0rem auto;
  width: 100%;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 28rem;
  grid-gap: 2rem;

  > div {
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  > div:last-child {
    > section {
      border-radius: 6px 44px 6px 44px;
    }
  }
`;

export const CardContainer = styled.section`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }
`;

export const CardInformationOrder = styled(CardContainer)`
  gap: 2rem;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['brand-yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      gap: 0.75rem;
    }
  }

  /* main {
    display: grid;
  } */
`;

export interface InputContainerProps {
  sizeField?: string;
  fullField?: boolean;
  upperCase?: boolean;
}

export const InputContainer = styled.input<InputContainerProps>`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 14px;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme['base-label']};
  position: relative;

  width: ${(props) => (props.sizeField ? props.sizeField : `inherit`)};
  min-width: ${(props) => (props.sizeField ? props.sizeField : `inherit`)};

  flex: ${(props) => (props.fullField ? 1 : `inherit`)};
  text-transform: ${(props) => (props.upperCase ? `uppercase` : `inherit`)};

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['brand-yellow-dark']};
  }
`;

export const TextFieldContainer = styled.div`
  padding: 0.75rem;
  position: relative;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  &:focus-within {
    border-color: ${(props) => props.theme['brand-yellow-dark']};
  }

  display: flex;
`;

export const StyledInnerLabel = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-size: 0.75rem;
  font-style: italic;
  &.prefix {
    max-width: fit-content;
  }
  &.suffix {
    max-width: fit-content;
    right: 0;
  }
`;

export const StyledInput = styled(InputContainer)`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0px;

  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export const CardPayment = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
  }

  main {
    display: flex;
    gap: 0.75rem;
  }
`;

export interface ButtonTypePaymentProps {
  selected?: boolean;
}

export const ButtonTypePayment = styled.button<ButtonTypePaymentProps>`
  flex: 1;
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  gap: 0.75rem;
  cursor: pointer;

  transition: background 0.2s;

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) => {
    if (!props.selected) return '';

    return /*css*/ `
      background-color: ${props.theme['base-hover']};
    `;
  }}
`;

export const CardResume = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > a {
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background: ${(props) => props.theme['brand-yellow']};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['base-white']};
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 160%;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    transition: background 0.2s;

    :hover {
      background-color: ${(props) => props.theme['brand-yellow-dark']};
    }
  }
`;

export const CardProductCart = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;

    justify-content: space-between;
    img {
      height: 4rem;
      width: 4rem;
    }

    > div {
      display: flex;
      gap: 1.25rem;

      > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        > div {
          display: flex;
          gap: 0.5rem;
        }
      }
    }
  }

  .title {
    color: ${(props) => props.theme['base-subtitle']};
  }

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme['base-button']};
    margin-top: 1.5rem;
  }
`;

export const ProductCounter = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-title']};
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  button {
    color: ${(props) => props.theme['brand-purple']};
    border: 0;
    height: 0.875rem;
    width: 0.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    transition: color 0.2s;

    :hover {
      color: ${(props) => props.theme['brand-purple-dark']};
    }
  }

  span {
    min-width: 1.25rem;
    text-align: center;
  }

  strong {
    min-width: 1.25rem;
    text-align: center;
  }
`;

export const ButtonRemove = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  span {
    line-height: 160%;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  transition: background 0.2s;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
`;

export const CheckoutAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }

  div:last-child {
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
