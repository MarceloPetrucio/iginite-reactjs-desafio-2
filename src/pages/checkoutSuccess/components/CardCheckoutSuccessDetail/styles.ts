import styled from 'styled-components';
import { CardCheckoutColors } from '.';

const CardDetailMapperColor = {
  purple: 'brand-purple',
  yellow: 'brand-yellow',
  'yellow-dark': 'brand-yellow-dark',
} as const;

export interface CardDetailContainerProps {
  color: CardCheckoutColors;
}

export const CardDetailContainer = styled.div<CardDetailContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme[CardDetailMapperColor[props.color]]};
    color: ${(props) => props.theme.white};
  }

  main {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    flex-direction: column;

    strong {
      font-weight: bold;
    }
  }
`;
