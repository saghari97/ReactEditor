import { Link } from "react-router-dom";

const UserB = ({ users, setSelectedUsers }) => {
  const handleClick = (user) => {
    setSelectedUsers(user);
  };
  return (
    <div className="userNames">
      {users.map((user) => (
        <div className="pls" key={user.id}>
          <Link to={`/posts/${user.id}`}>
            <button onClick={() => handleClick(user)}>
              {user.username} (User {user.id})
            </button>
          </Link>
          <a href="/"></a>
        </div>
      ))}
    </div>
  );
};
export default UserB;
