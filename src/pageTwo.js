import { useState } from "react";
import UserB from "./UserB";
import useFetch from "./useFetch";
import MainPostsTwo from "./MainPostTwo";

const PageTwo = () => {
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
        <MainPostsTwo
          blogs={blogs.filter((userById) => userById.userId === 2)}
        />
      )}
    </div>
  );
};
export default PageTwo;
