import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "./Global/user";
import UserCard from "./Components/UserCard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const userData = useSelector((state) => state.users);
  console.log(userData.data);

  return (
    <>
      {userData.data && (
        <div className="w-screen min-h-screen flex items-center flex-wrap gap-10 p-10">
          {userData.data.users.map((value) => {
            return (
              <UserCard
                key={value.id}
                profile={value.image}
                firstName={value.firstName}
                lastName={value.lastName}
                age={value.age}
                email={value.email}
                mobile={value.phone}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
