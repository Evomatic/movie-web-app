import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import RootNavigation from "./navigation/RootNavigation";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <main>
      <MantineProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </MantineProvider>
    </main>
  );
}

export default App;
