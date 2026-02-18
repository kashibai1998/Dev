import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./store/store.js";
import ThemeProvider from "./store/themeCtx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewApp from "./NewApp.jsx";
import newStore from "./__new__/components/store/newStore.jsx";

const queryClient = new QueryClient();

// createRoot(document.getElementById("root")).render(
//   <QueryClientProvider client={queryClient}>
//     <Provider store={store}>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </Provider>
//   </QueryClientProvider>
// );

createRoot(document.getElementById("root")).render(
  <Provider store={newStore}>
    <NewApp />
  </Provider>
);
