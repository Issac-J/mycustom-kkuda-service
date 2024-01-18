import "./App.css";
import { Route, Routes } from "react-router";

import Layout from "../src/components/common/Layout";
import Order from "./pages/Order";
import OrderConfirm from "./pages/OrderConfirm";
import OrderComplete from "./pages/OrderComplete";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/user/order/:productId" element={<Order />} />
          <Route path="/user/order-confirm" element={<OrderConfirm />} />
          <Route path="/user/order-complete" element={<OrderComplete />} />
          <Route path="/user/order-complete" element={<OrderComplete />} />
          <Route path="*" element={<NotFound>잘못된 경로입니다.</NotFound>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
