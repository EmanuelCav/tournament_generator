import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./app/components/header/Header";
import Home from "./app/routes/Home";
import Auth from "./app/routes/Auth";

import { Box } from "@mui/material";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Box mt={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
