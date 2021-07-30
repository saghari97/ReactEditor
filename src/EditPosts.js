import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "react-popup-alert";

const EditPosts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // loading
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  //to refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body };

    setIsPending(true);
    fetch("https://jsonplaceholder.typicode.com/posts/:id", {
      method: "POST",
      //file json e
      headers: { "Content-type": "application/json; charset=UTF-8" },
      //strig kone blog ro
      body: JSON.stringify(blog),
    }).then((response) => {
      response.json();
      setIsPending(false);
      history.push("/");
    });
    fetch("https://jsonplaceholder.typicode.com/posts/:id", {
      method: "PUT",
      //file json e
      headers: { "Content-type": "application/json; charset=UTF-8" },
      //strig kone blog ro
      body: JSON.stringify(blog),
    }).then((response) => {
      response.json();
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="EditPosts">
      <div>
        <form onSubmit={handleSubmit}>
          <label>POST TITLE:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>POST BODY</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {!isPending && (
            <button>
              <h3>Save</h3>
            </button>
          )}
          {isPending && (
            <button disabled>
              <h3>Saving...</h3>
            </button>
          )}
        </form>
      </div>
      <div className="buttoni">
        <Link to={"/"}>
          {" "}
          <button canceling>
            <h3>Cancel :( </h3>
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default EditPosts;
