import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/routes/Home";
import Header from "./app/components/header/Header";

import { Box, Container } from "@mui/material";

function App() {

  return (
    <BrowserRouter>
      <Container fixed maxWidth="lg">
        <Header />
        <Box mt={12}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App
