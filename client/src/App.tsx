import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/routes/Home";
import Header from "./app/components/header/Header";

import { Container } from "@mui/material";

function App() {

  return (
    <BrowserRouter>
      <Container fixed maxWidth="sm">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
