import styled from 'styled-components';

const BaseTitle = styled.div`
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
  font-weight: 700;
`;

export const TitleXL = styled(BaseTitle)`
  font-size: 3rem;
  font-weight: 800;
`;

export const TitleL = styled(BaseTitle)`
  font-size: 2rem;
  font-weight: 800;
`;

export const TitleM = styled(BaseTitle)`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const TitleS = styled(BaseTitle)`
  font-size: 1.25rem;
`;

export const TitleXS = styled(BaseTitle)`
  font-size: 1.125rem;
`;

const BaseText = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
`;

export const TextRegularL = styled(BaseText)`
  font-size: 1.25rem;
  font-weight: 400;
`;

export const TextRegularM = styled(BaseText)`
  font-size: 1rem;
  font-weight: 400;
`;
export const TextRegularS = styled(BaseText)`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const TextBoldL = styled(BaseText)`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const TextBoldM = styled(BaseText)`
  font-size: 1rem;
  font-weight: 700;
`;

export const TextBoldS = styled(BaseText)`
  font-size: 0.75rem;
  font-weight: 700;
`;

export const TextButtonS = styled(BaseText)`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
`;

export const TextButtonG = styled(BaseText)`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 160%;
`;
