import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment,setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const handleBooking = e =>{
      e.preventDefault();
      const slot = e.target.slot.value;
      const phone = e.target.phone.value;
      setTreatment(null);//to close the modal
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
        
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-secondary text-center">
            Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              disabled
              value={format(date || new Date(), "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select  name="slot" className="select select-bordered w-full max-w-xs">
              {
                  slots.map((slot,index)=> <option value={slot} key={index}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName || ''}
              disabled
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs"
              value={user?.email || ''}
              disabled
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
