import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer/>
        },
        {
          path: "/watch",
          element: <WatchPage/>
        }

      ]
    }
])
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
        {/**
         *
         * Head
         * Body
         *    Sidebar
         *    MenuItems
         *    MainContainer
         *      ButtonsList
         *      VideoContainer
         *        VideoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
