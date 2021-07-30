import UsersComp from "./UsersComp";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageTwo from "./pageTwo";
import PageThree from "./pageThree";
import PageFour from "./pageFour";
import PageFive from "./pageFive";
import PageSix from "./pageSix";
import PageSeven from "./pageSeven";
import PageEight from "./pageEight";
import PageTen from "./pageTen";
import PageNine from "./pageNine";
import EditPosts from "./EditPosts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <switch>
            <Route exact path={"/"}>
              <UsersComp />
            </Route>
            <Route exact path={"/posts/1"}>
              <UsersComp />
            </Route>
            <Route exact path={"/posts/2"}>
              <PageTwo />
            </Route>
            <Route exact path={"/posts/3"}>
              <PageThree />
            </Route>
            <Route exact path={"/posts/4"}>
              <PageFour />
            </Route>
            <Route exact path={"/posts/5"}>
              <PageFive />
            </Route>
            <Route exact path={"/posts/6"}>
              <PageSix />
            </Route>
            <Route exact path={"/posts/7"}>
              <PageSeven />
            </Route>
            <Route exact path={"/posts/8"}>
              <PageEight />
            </Route>
            <Route exact path={"/posts/9"}>
              <PageNine />
            </Route>
            <Route exact path={"/posts/10"}>
              <PageTen />
            </Route>
            <Route exact path={"/EditPosts"}>
              <EditPosts />
            </Route>
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
