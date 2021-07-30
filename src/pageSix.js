import { useState } from "react";
import UserB from "./UserB";
import useFetch from "./useFetch";
import MainPostsSix from "./MainPostSix";

const PageSix = () => {
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
        <MainPostsSix
          blogs={blogs.filter((userById) => userById.userId === 6)}
        />
      )}
    </div>
  );
};
export default PageSix;
