
import Login from "./page/Login";
import Regiter from "./page/register";
import HomePage from "./page/HomePage";
import Layout from "./Layout/Layout";
import Add from "./page/Add";
import List from "./page/List";
import { Link, useRoutes } from "react-router-dom";
import Edit from "./page/Edit";
function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "product/list",
          element: <List />
        },
        {
          path: "product/edit/:id",
          element: <Edit />
        },
        {
          path: "/product/add",
          element: <Add />
        },
      ]

    },
    {
      path: "register",
      element: <Regiter />
    },
    
    {
      path: "view",
      element: <HomePage />
    },
    {
      path: "login",
      element: <Login />
    }
  ]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Thi WEB209
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: 3, fontSize: 20 }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product/add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product/list">
                  List Product
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger">Logout</button>
        </div>
      </nav>
      {routes}
    </>
  );
}

export default App;
