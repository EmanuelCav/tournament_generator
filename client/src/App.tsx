import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import Header from "./app/components/header/Header";
import Home from "./app/routes/Home";
import Auth from "./app/routes/Auth";
import Panel from "./app/routes/Panel";
import Events from "./app/routes/Events";
import Event from "./app/routes/Event";

import { Box } from "@mui/material";

import { store } from './app/server/store'
import PrivateRoute from "./app/routes/PrivateRoute";

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
              <Route path="/events" element={<Events />} />
              <Route path="/panel" element={<PrivateRoute />}>
                <Route path="/panel" element={<Panel />} />
              </Route>
              <Route path="/events/:id" element={<PrivateRoute />}>
                <Route path="/events/:id" element={<Event />} />
              </Route>
            </Routes>
          </Box>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
