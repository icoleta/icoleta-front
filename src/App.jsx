import React from "react";
import Paths from "./routes";
import { AuthProvider } from "./contexts/auth";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Paths />
      </AuthProvider>
    </div>
  );
}

export default App;
