import { useState } from "react";
import MainButtons from "./MainButtons";
import UserB from "./UserB";
import useFetch from "./useFetch";
import { Switch } from "react-router-dom";

const UsersComp = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const { data: users } = useFetch(
    "https://jsonplaceholder.typicode.com/users "
  );
  const [selectedUsers, setSelectedUsers] = useState(null);
  return (
    <div className="front">
      {users && <UserB users={users} setSelectedUsers={setSelectedUsers} />}
      {blogs && (
        <MainButtons
          blogs={blogs.filter((userById) => userById.userId === 1)}
        />
      )}
    </div>
  );
};
export default UsersComp;
