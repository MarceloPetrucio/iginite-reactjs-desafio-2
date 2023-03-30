import styled from 'styled-components';
import background from './../../../../assets/background.png';
import { TitleXL, TextRegularL } from '../../../../styles/text';

export const BannerImage = styled.div`
  height: 34rem;
  background: url(${background}) no-repeat center/cover;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BannerContainer = styled.div`
  max-width: 70rem;
  margin: 0rem auto;
  width: 100%;

  padding: 5.75rem 0rem;
  display: flex;
  gap: 3.5rem;
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  img {
    max-height: 22.5rem;
    object-fit: cover;
  }
`;

export const TitleContainer = styled(TitleXL)`
  color: ${(props) => props.theme['base-title']};
`;

export const SubtitleContainer = styled(TextRegularL)`
  color: ${(props) => props.theme['base-subtitle']};
`;

export const ListBenefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
  align-items: center;
`;

const BENEFITS_COLORS = {
  yellowDark: 'brand-yellow-dark',
  yellow: 'brand-yellow',
  gray: 'base-text',
  purple: 'brand-purple',
} as const;

interface BenefitsProps {
  benefitColor: keyof typeof BENEFITS_COLORS;
}

export const Benefits = styled.div<BenefitsProps>`
  display: flex;
  gap: 0.75rem;
  min-width: 14.375rem;
  align-items: center;

  span {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme[BENEFITS_COLORS[props.benefitColor]]};
    border-radius: 999px;
    color: ${(props) => props.theme['base-white']};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
