import { useState } from "react";
import UserB from "./UserB";
import useFetch from "./useFetch";
import MainPostsTen from "./MainPostTen";

const PageTen = () => {
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
        <MainPostsTen
          blogs={blogs.filter((userById) => userById.userId === 10)}
        />
      )}
    </div>
  );
};
export default PageTen;
