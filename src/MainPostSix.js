import { Link } from "react-router-dom";

const MainPostsSix = ({ blogs }) => {
  var splitted;
  return (
    <div className="Menu">
      {blogs.map(
        (buttonS) => (
          (splitted = buttonS.body.split("\n")),
          (
            <div className="Menuz" key={buttonS.id}>
              <div className="menuB">
                <button> User {buttonS.userId} posts</button>
              </div>
              <div>{buttonS.u}</div>
              <div className="detailsB">
                <Link to={"/EditPosts"}>
                  <button> {buttonS.title}</button>
                  <button> {splitted[0]}</button>
                  <button> {splitted[1]}</button>
                  <button>{splitted[2]}</button>
                </Link>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default MainPostsSix;
