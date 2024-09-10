import React, { useEffect, useState } from 'react';
import "../css/Table.css";
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import Swal from 'sweetalert2';

const ProductTable = () => {

  const [productarr, setProductarr] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    brand: '', name: '', price: '', des: '', img: '',
    phone: '', email: '', checkInDate: '', checkInTime: '',
    checkOutDate: '', checkOutTime: ''
  });

  const productCollection = collection(db, "product");

  const getData = async () => {
    let Data = await getDocs(productCollection);
    let arr = Data.docs.map((el) => {
      return { id: el.id, ...el.data() };
    });
    setProductarr(arr);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const data = doc(db, "product", id);
    await deleteDoc(data);
    Swal.fire('Product Deleted Successfully');
    getData();
  }

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setFormData({
      brand: product.brand,
      name: product.name,
      price: product.price,
      des: product.des,
      img: product.img,
      phone: product.phone,
      email: product.email,
      checkInDate: product.checkInDate,
      checkInTime: product.checkInTime,
      checkOutDate: product.checkOutDate,
      checkOutTime: product.checkOutTime
    });
    const modal = new window.bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }

  const handleSave = async () => {
    if (editingProduct) {
      const productDoc = doc(db, "product", editingProduct);
      await updateDoc(productDoc, formData);
      Swal.fire('Product Updated Successfully');
      setEditingProduct(null);
      setFormData({
        brand: '', name: '', price: '', des: '', img: '',
        phone: '', email: '', checkInDate: '', checkInTime: '',
        checkOutDate: '', checkOutTime: ''
      });
      getData();

      const modalElement = document.getElementById('editModal');
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
    }
  }

  

  return (
    <>
      <div className="table1">
  <div className="t-1">
    <table className="table text-center table-bordered border-success">
      <thead>
        <tr>
          <th scope="col" className='text-dark'>First Name*</th>
          <th scope="col" className='text-dark'>Last Name*</th>
          <th scope="col" className='text-dark'>Address</th>
          <th scope="col" className='text-dark'>City</th>
          <th scope="col" className='text-dark'>State</th>
          <th scope="col" className='text-dark'>Email</th>
          <th scope="col" className='text-dark'>Check-in Date</th>
          <th scope="col" className='text-dark'>Check-in Time</th>
          <th scope="col" className='text-dark'>Check-out Date</th>
          <th scope="col" className='text-dark'>Check-out Time</th>
        </tr>
      </thead>
      <tbody>
        {
          productarr.map((el) => (
            <tr key={el.id}>
              <td className='text-dark text-center'>{el.brand}</td>
              <td className='text-dark text-center'>{el.name}</td>
              <td className='text-dark text-center'>{el.price}</td>
              <td className='text-dark text-center w-25 ms-5'>{el.des}</td>
              <td>
                <img src={el.img} alt={el.name} style={{ width: "100px", height: "100px" }} />
              </td>
              <td>
                <button className='btn border border-success text-dark mt-2 ms-4 w-50' onClick={() => handleDelete(el.id)}>Delete</button>
                <button className='btn border border-success text-dark ms-4 mt-3 w-50' onClick={() => handleEdit(el)}>Edit</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>


       
    </div>
    </>
  )
}

export default ProductTable;
