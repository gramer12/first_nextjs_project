import axios from "axios";
import { useEffect, useState } from "react";
import Page from "..";
import Layout from "../../components/Layout";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  console.log(users[0]);
  return (
    <Layout>
      <div>사용자 목록 페이지</div>
      {users.map((user) => {
        return (
          <div key={user.id} className="border m-5 p-3">
            <div className="text-2xl font-bold">{user.username}</div>
            <div>{user.name}</div>
            <div className="text-gray-600">{user.email}</div>
            <a href={`//${user.website}`}>{user.website}</a>
          </div>
        );
      })}
    </Layout>
  );
}
