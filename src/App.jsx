import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";

import { SearchInput } from "./atoms/SearchInput";
import { ShoppingDashboardPage } from "./pages/ShoppingDashboardPage";

function App() {
  return (
    <Provider store={store}>
      <div>test</div>
    </Provider>
  );
}

export default App;
