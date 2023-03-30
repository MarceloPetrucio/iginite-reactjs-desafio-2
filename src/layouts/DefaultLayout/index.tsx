import { LayoutContainer } from './styles';
import { Header } from '../../components/header/index';
import { Home } from '../../pages/home/index';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
