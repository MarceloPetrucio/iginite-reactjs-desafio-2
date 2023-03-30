import styled from 'styled-components';
import { TitleL, TitleS, TextRegularS, TitleM } from '../../styles/text';

export const HomeContainer = styled.div``;

export const ProductsSection = styled.div`
  max-width: 70rem;
  margin: 0rem auto;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const TitleLContainer = styled(TitleL)`
  color: ${(props) => props.theme['base-subtitle']};
`;

export const ListProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.25rem 2rem;
  list-style: none;
`;
