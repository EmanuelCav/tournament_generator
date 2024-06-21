import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./app/components/header/Header";
import Home from "./app/routes/Home";
import Auth from "./app/routes/Auth";
import Panel from "./app/routes/Panel";
import Events from "./app/routes/Events";
import Event from "./app/routes/Event";
import Create from "./app/routes/Create";

import NotFound from "./app/routes/NotFound";
import PrivateRoute from "./app/routes/PrivateRoute";
import Loading from "./app/components/response/Loading";

import { store } from './app/server/store'

const persistor = persistStore(store)

function App() {

  return (
    <BrowserRouter>
      <ToastContainer limit={1} />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Loading />
          <Header />
          <Box mt={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/events" element={<Events />} />
              <Route path="/create" element={<PrivateRoute />}>
                <Route path="/create" element={<Create />} />
              </Route>
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
