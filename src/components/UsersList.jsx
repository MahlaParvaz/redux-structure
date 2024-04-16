import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.users);
  return (
    <div>
      <h2>My data list</h2>
      <button onClick={() => dispatch(fetchUsers())}>get data </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
      )}
    </div>
  );
}
export default UsersList;
