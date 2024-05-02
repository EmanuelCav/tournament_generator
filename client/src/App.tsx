import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/routes/Home";
import Header from "./app/components/header/Header";

import { Box } from "@mui/material";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Box mt={10}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
