import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"

import routes from "./routes/routes";
import store from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
