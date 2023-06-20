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
        "https://randomuser.me/api/?inc=name,picture&results=10"
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
    <div>
      <Header />
      <input
        type="text"
        placeholder="Find a user..."
        onChange={(event) => {
          const userName = event.target.value.toLowerCase().replaceAll(" ", "");

          setSearch(userName);
        }}
      />
      <div>
        {users.map((user, index) => {
          return <User key={`user-${index}`} index={index} user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
