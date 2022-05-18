import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deletingDoc, refetch, setDeletingDoc}) => {
    const {name, email} = deletingDoc;

    const handleDelete = email =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted`);
                setDeletingDoc(null);
                refetch(); 
            }
        })
      }
  return (
    <>
      <input type="checkbox" id="delete-confirm" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
          <button onClick={()=>handleDelete(email)} className="btn btn-xs btn-error">delete</button>

            <label for="delete-confirm" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
