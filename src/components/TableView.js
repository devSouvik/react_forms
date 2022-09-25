import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase-config";
import Table from "react-bootstrap/Table";

const userCollectionRef = collection(db, "users");

function TableView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userCollection = await getDocs(userCollectionRef);
      // console.log(userCollection.docs.map((doc) => doc.data()));
      setUsers(
        userCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getUser();
  }, []);

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            <th>Fname</th>
            <th>Lname</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.Fname}</td>
                <td>{user.Lname}</td>
                <td>{user.Email}</td>
                <td>{user.Address}</td>
                <td>{user.City}</td>
                <td>{user.State}</td>
                <td>{user.Zip}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableView;
