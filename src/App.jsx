import { Provider } from "react-redux";
import "./App.css";

import store from "./redux/store/store";
import withLayout from "./templates/Layout";
import { ShoppingDashboardPage } from "./pages/ShoppingDashboardPage";

function App() {
  const Layout = withLayout(ShoppingDashboardPage);
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
}

export default App;
