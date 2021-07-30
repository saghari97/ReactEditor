import { useState } from "react";
import UserB from "./UserB";
import useFetch from "./useFetch";
import MainPostsFive from "./MainPostFive";

const PageFive = () => {
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
        <MainPostsFive
          blogs={blogs.filter((userById) => userById.userId === 5)}
        />
      )}
    </div>
  );
};
export default PageFive;
