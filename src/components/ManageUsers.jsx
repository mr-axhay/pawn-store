// import './ManageUsers.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { __userapiurl } from '../API_URL';
// import { useNavigate } from 'react-router-dom';

// function ManageUsers() {

//   const navigate = useNavigate();
//   const [users, setUserDetails] = useState([]);

//   useEffect(() => {
//     axios.get(__userapiurl + "fetch", {
//       params: { "role": "user" }
//     }).then((response) => {
//       //console.log(response.data.info);
//       setUserDetails(response.data.info);
//     }).catch((error) => {
//       console.log(error);
//     });
//   }, []);

//   const manageUserStatus = (_id, s) => {
//     if (s == "active") {
//       var data = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
//       axios.patch(__userapiurl + "update", data).then(() => {
//         alert("User profile activated successfully....");
//         navigate("/manageUsers");
//       });
//     }
//     else if (s == "inactive") {
//       var data = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
//       axios.patch(__userapiurl + "update", data).then(() => {
//         alert("User profile in-activated successfully....");
//         navigate("/manageUsers");
//       });
//     }
//     else {
//       var data = { "data": { "_id": _id } };
//       axios.delete(__userapiurl + "delete", data).then(() => {
//         alert("User profile deleted successfully....");
//         navigate("/manageUsers");
//       });
//     }
//   };

//   return (
//     <>
//       <div id="tooplate_content">

//         <div className="content_box content_box_last">

//           <h2>View & Manage User Details</h2>
//           <table border={2} cellPadding={10} cellSpacing={10}>
//             <thead>
//             <tr>
//               <th>RegID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Mobile</th>
//               <th>Address</th>
//               <th>City</th>
//               <th>Gender</th>
//               <th>Info</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//             </thead>
//             <tbody>
//             {
//               users.map((row) => (
//                 <tr key={row._id}>
//                   <td>{row._id}</td>
//                   <td>{row.name}</td>
//                   <td>{row.email}</td>
//                   <td>{row.mobile}</td>
//                   <td>{row.address}</td>
//                   <td>{row.city}</td>
//                   <td>{row.gender}</td>
//                   <td>{row.info}</td>
//                   <td>{row.status ? <font color="green">Active</font> : <font color="orange">In-Active</font>}</td>
//                   <td>
//                     {row.status ? <font onClick={() => { manageUserStatus(row._id, 'inactive') }} color="blue">ChangeStatus</font> : <font onClick={() => { manageUserStatus(row._id, 'active') }} color="blue">ChangeStatus</font>}
//                     <br />
//                     <font onClick={() => { manageUserStatus(row._id, 'delete') }} color="red">Delete</font>
//                   </td>
//                 </tr>
//               ))
//             }
//           </tbody>
//           </table>

//         </div>
//         <div className="cleaner"></div>
//       </div>
//     </>
//   );
// }

// export default ManageUsers;

import './ManageUsers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../API_URL';
import { useNavigate } from 'react-router-dom';

function ManageUsers() {

  const navigate = useNavigate();
  const [users, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get(__userapiurl + "fetch", {
      params: { "role": "user" }
    }).then((response) => {
      //console.log(response.data.info);
      setUserDetails(response.data.info);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const manageUserStatus = (_id, s) => {
    if (s == "active") {
      var data = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
      axios.patch(__userapiurl + "update", data).then(() => {
        alert("User profile activated successfully....");
        navigate("/manageUsers");
      });
    }
    else if (s == "inactive") {
      var data = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
      axios.patch(__userapiurl + "update", data).then(() => {
        alert("User profile in-activated successfully....");
        navigate("/manageUsers");
      });
    }
    else {
      var data = { "data": { "_id": _id } };
      axios.delete(__userapiurl + "delete", data).then(() => {
        alert("User profile deleted successfully....");
        navigate("/manageUsers");
      });
    }
  };

  return (
    <>
     <h2>View & Manage User Details</h2>

<div className="user-card-container">
  {users.map((row) => (
    <div className="user-card" key={row._id}>

      <div className="user-card-header">
        <h3>{row.name}</h3>
        <span className={row.status ? "status-active" : "status-inactive"}>
          {row.status ? "Active" : "In-Active"}
        </span>
      </div>

      <div className="user-card-body">
        <p><strong>ID:</strong> {row._id}</p>
        <p><strong>Email:</strong> {row.email}</p>
        <p><strong>Mobile:</strong> {row.mobile}</p>
        <p><strong>Address:</strong> {row.address}</p>
        <p><strong>City:</strong> {row.city}</p>
        <p><strong>Gender:</strong> {row.gender}</p>
        <p><strong>Info:</strong> {row.info}</p>
      </div>

      <div className="user-card-actions">
        {row.status ? (
          <button
            className="btn-warning"
            onClick={() => manageUserStatus(row._id, "inactive")}
          >
            Change Status
          </button>
        ) : (
          <button
            className="btn-success"
            onClick={() => manageUserStatus(row._id, "active")}
          >
            Change Status
          </button>
        )}

        <button
          className="btn-danger"
          onClick={() => manageUserStatus(row._id, "delete")}
        >
          Delete
        </button>
      </div>

    </div>
  ))}
</div>
    </>
  );
}

export default ManageUsers;