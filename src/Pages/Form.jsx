import React, { useState } from 'react';
import "../css/Form.css";
import { db } from '../firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Form = () => {
  // State variables for each input
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");

  const productCollection = collection(db, "product");

  const handlesubmit = async (e) => {
    e.preventDefault();

    let obj = {
      brand,
      name,
      price,
      des,
      img,
      phone,
      email,
      checkInDate,
      checkInTime,
      checkOutDate,
      checkOutTime,
    };

    let a = await addDoc(productCollection, obj);
    Swal.fire('Product Added!', 'Your product has been added successfully.', 'success');
    console.log(a.id);

    // Reset all the states
    setBrand("");
    setName("");
    setPrice("");
    setDes("");
    setImg("");
    setPhone("");
    setEmail("");
    setCheckInDate("");
    setCheckInTime("");
    setCheckOutDate("");
    setCheckOutTime("");
  };

  return (
    <>
      <div className="form1">
        <div className="heading">
          <h2 className="text-center mt-3 text-success fw-bold">Reservation-Form</h2>
        </div>
        <form className="row g-3 p-4" onSubmit={handlesubmit}>
          <div className="col-md-6">
            <label className="form-label text-success fs-5 ms-2">First Name*</label>
            <input type="text" name="brand" value={brand} className="form-control border border-success" onChange={(e) => setBrand(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success fs-5 ms-2 mt-2">Last Name*</label>
            <input type="text" name="name" value={name} className="form-control border border-success" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-12">
            <label className="form-label text-success mt-2 fs-5 ms-2">Address*</label>
            <input type="text" name="price" value={price} className="form-control border border-success" onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="col-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">City*</label>
            <input type="text" name="des" value={des} className="form-control border border-success" onChange={(e) => setDes(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">State*</label>
            <input type="text" name="img" value={img} className="form-control border border-success" onChange={(e) => setImg(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">Phone*</label>
            <input type="text" name="phone" value={phone} className="form-control border border-success" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">Email*</label>
            <input type="email" name="email" value={email} className="form-control border border-success" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">Check-in Date*</label>
            <input type="date" name="checkInDate" value={checkInDate} className="form-control border border-success" onChange={(e) => setCheckInDate(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">Check-in Time*</label>
            <input type="time" name="checkInTime" value={checkInTime} className="form-control border border-success" onChange={(e) => setCheckInTime(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">Check-out Date*</label>
            <input type="date" name="checkOutDate" value={checkOutDate} className="form-control border border-success" onChange={(e) => setCheckOutDate(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label text-success mt-2 fs-5 ms-2">Check-out Time*</label>
            <input type="time" name="checkOutTime" value={checkOutTime} className="form-control border border-success" onChange={(e) => setCheckOutTime(e.target.value)} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-50 mt-2" style={{ marginLeft: "130px" }}>Reservation</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
