import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import Header from "./app/components/header/Header";
import Home from "./app/routes/Home";
import Auth from "./app/routes/Auth";

import { Box } from "@mui/material";

import { store } from './app/server/store'

const persistor = persistStore(store)

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Header />
          <Box mt={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Box>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
