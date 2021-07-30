import { useState } from "react";
import UserB from "./UserB";
import useFetch from "./useFetch";
import MainPostsFour from "./MainPostFour";

const PageFour = () => {
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
        <MainPostsFour
          blogs={blogs.filter((userById) => userById.userId === 4)}
        />
      )}
    </div>
  );
};
export default PageFour;
