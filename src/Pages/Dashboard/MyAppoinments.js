import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppoinments = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppoinments(data));
    }
  }, [user]);
  return (
    <div>
      <h2>My appoinments:{appoinments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
                appoinments.map((appoinment,index) => <tr key={appoinment._id}>
                    <td>{index+1}</td>
                    <td>{appoinment.patientName}</td>
                    <td>{appoinment.date}</td>
                    <td>{appoinment.slot}</td>
                    <td>{appoinment.treatment}</td>
                  </tr>)
            }

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinments;
