import styled from 'styled-components';
import { TitleS, TextRegularS, TitleM } from '../../../../styles/text';

export const ProductContainer = styled.li`
  margin-top: 1.25rem;
  width: 16.125rem;
  background-color: ${(props) => props.theme['base-card']};
  min-height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    margin-top: -1.25rem;
    align-self: center;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const ProductTag = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  span {
    background: ${(props) => props.theme['brand-yellow-light']};
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['brand-yellow-dark']};
  }
`;

export const ProductDetail = styled.div`
  margin-top: 1rem;
  margin-inline: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductTitle = styled(TitleS)`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
`;

export const ProductDescription = styled(TextRegularS)`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`;

export const ProductFooter = styled.div`
  margin: 0px 1.5rem 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
`;

export const ProductPrice = styled(TitleM)``;

export const ProductPriceMoney = styled(TextRegularS)`
  padding-bottom: 0.25rem;
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    width: 2.375rem;
    height: 2.375rem;
    background: ${(props) => props.theme['brand-purple-dark']};
    color: ${(props) => props.theme['base-white']};
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    &.addCart:hover {
      background: ${(props) => props.theme['brand-purple']};
    }
  }
`;

export const ProductCounter = styled.div`
  padding: 0.75rem 0.5rem;
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

    :hover {
      color: ${(props) => props.theme['brand-purple-dark']};
    }
  }

  strong {
    min-width: 1.25rem;
    text-align: center;
  }
`;
