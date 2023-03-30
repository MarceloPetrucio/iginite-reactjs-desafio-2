import { ReactNode } from 'react';
import { CardDetailContainer } from './styles';

export type CardCheckoutColors = 'purple' | 'yellow' | 'yellow-dark';

export interface CardCheckoutSuccessDetailProps {
  icon: ReactNode;
  color: CardCheckoutColors;
  children: ReactNode;
}

export function CardCheckoutSuccessDetail({
  children,
  color,
  icon,
}: CardCheckoutSuccessDetailProps) {
  return (
    <CardDetailContainer color={color}>
      <div className="circle">{icon}</div>
      <main>{children}</main>
    </CardDetailContainer>
  );
}
