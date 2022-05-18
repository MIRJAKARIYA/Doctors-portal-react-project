import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoc, setDeletingDoc] = useState(null)
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">Manage Doctors: {doctors?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <DoctorRow
                doctor={doctor}
                key={doctor._id}
                index={index}
                refetch={refetch}
                setDeletingDoc={setDeletingDoc}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
            {deletingDoc && <DeleteConfirmModal setDeletingDoc={setDeletingDoc} refetch={refetch} deletingDoc={deletingDoc}></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
