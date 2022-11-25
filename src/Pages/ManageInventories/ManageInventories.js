import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";


import "./ManageInventories.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth)

  useEffect(() => {
    fetch("https://computer-house-app.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);


  const handleDelete = (id) => {
    const procceed = window.confirm("Are you sure delete this Item")
    if(procceed){ 
        const url = `https://computer-house-app.onrender.com/${id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
            }
        })
    }
  }


  return (
    <div className="manage-inventories-section">
      <div className="container">
      <div className="row">
        <div className="col-md-6">
            <h4 className="text-success text-start">All Inventories Items Manage {products.length} </h4>
        </div>
        <div className="col-md-6 text-end">
          <Link style={{ display: "block" }} to='/add-new-inventory'>
            <button className="btn btn-primary me-2">Add new Item <FaPlusCircle /></button>
          </Link>
        </div>
      </div>
      <hr />
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 w-100 mx-auto">
            <div className="table-products mt-3">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Admin</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td>
                        <img
                          src={product.img}
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </td>
                      <td className="fw-bold text-start">{product.name}</td>
                      <td>{product.email}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>
                        <p className="d-flex">
                          <Link
                            style={{ display: "inline-block" }}
                            to={`/inventory/${product._id}`}
                          >
                            <button className="btn btn-success me-2">
                              Update
                            </button>
                          </Link> 
                            <button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button>
                           
                        </p>
                      </td>
                    </tr>
                  ))}

                  {/* <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>22</td>
                    <td>3444</td>
                    <td>update</td>
                  </tr>  */}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
