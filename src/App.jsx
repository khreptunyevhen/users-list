import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import Header from "./components/Header/Header";
import User from "./components/User/User";

function App() {
  const [data, setData] = useState({});
  const [users, setUsers] = useImmer([]);
  const [search, setSearch] = useState("");

  const { results } = data;

  useEffect(() => {
    (async () => {
      const fetchData = await fetch(
        "https://randomuser.me/api/?inc=name,picture&results=6"
      );

      const getUsersInfo = await fetchData.json();

      setData(getUsersInfo);
      setUsers(getUsersInfo?.results || []);
    })();
  }, []);

  useEffect(() => {
    const newUsers = results?.filter((user) => {
      const fullName = `${user.name.title}${user.name.first}${user.name.last}`;

      if (fullName.toLowerCase().includes(search)) {
        return true;
      } else {
        return false;
      }
    });

    setUsers(newUsers || []);
  }, [search]);

  return (
    <div className="w-[400px] mx-auto pt-12">
      <Header />
      <input
        className="w-full p-2 rounded-xl outline-none focus:shadow-lg"
        type="text"
        placeholder="Find a user..."
        onChange={(event) => {
          const userName = event.target.value.toLowerCase().replaceAll(" ", "");

          setSearch(userName);
        }}
      />
      <div className="relative flex justify-between flex-wrap gap-6 my-12 p-4 bg-blue-200 rounded-2xl">
        {users.map((user, index) => {
          return <User key={`user-${index}`} index={index} user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
