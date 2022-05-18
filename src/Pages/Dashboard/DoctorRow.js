import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoc }) => {
  const { name, specialty, img,email } = doctor;

 

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={()=>setDeletingDoc(doctor)} for="delete-confirm" class="btn btn-xs btn-error">
        delete
      </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
