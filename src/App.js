import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Index from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
