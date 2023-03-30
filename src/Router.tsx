import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/home/index';
import { Checkout } from './pages/checkout/index';
import { CheckoutSuccess } from './pages/checkoutSuccess';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  );
}
