import { Provider } from "react-redux";
import "./App.css";

import store from "./redux/store/store";

import { ShoppingDashboardPage } from "./pages/ShoppingDashboardPage";

function App() {
  return (
    <Provider store={store}>
      <ShoppingDashboardPage />
    </Provider>
  );
}

export default App;
