import styled from 'styled-components';

export const CheckoutSuccessContainer = styled.div`
  max-width: 70rem;
  margin: 0rem auto;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  header {
    .title {
      color: ${(props) => props.theme['brand-yellow-dark']};
    }
  }

  > main {
    display: flex;
    align-items: flex-start;
    gap: 6.375rem;

    img {
      flex: 1;
    }
  }
`;

export const CardCheckoutSuccess = styled.div`
  flex: 1;
  background: linear-gradient(
        ${(props) => props.theme['base-background']},
        ${(props) => props.theme['base-background']}
      )
      padding-box,
    linear-gradient(
        135deg,
        ${(props) => props.theme['brand-yellow-dark']},
        ${(props) => props.theme['brand-purple']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
