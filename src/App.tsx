import { Outlet } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
