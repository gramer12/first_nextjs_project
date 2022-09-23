import axios from "axios";
import { useEffect, useState } from "react";
import Page from "..";
import Layout from "../../components/Layout";

export default function aser(props) {
  const [users, setUsers] = useState([]);
  console.log("나는 컴포넌트야");
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsers(res.data));
  // }, []);
  // console.log(users[0]);
  return (
    <Layout>
      <div>사용자 목록 페이지</div>
      {0 === props.users.length ? <div>ssr 로딩중</div> : null}
      {props.users.map((user) => {
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

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("res");
  console.log(res.data);
  return {
    props: {
      users: res.data,
    },
  };
}
