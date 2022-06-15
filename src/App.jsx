import React from "react";
import Paths from "./routes";
import { AuthProvider } from "./contexts/auth";

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
