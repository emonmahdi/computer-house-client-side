import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);

    

    useEffect(() => {
        const email = user?.email;

        const getMyItems = () => {

            try{
                const url = `https://computer-house-app.onrender.com/product?email=${email}`
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyItems(data);
                })
            }
            catch(error){
                console.log(error.message);
            }
        }

        getMyItems();
        
    }, [user])


    const handleDelete = (id) => {
        const procceed = window.confirm("Are you sure delete this Item")
        if(procceed){ 
            const url = `https://computer-house-app.onrender.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    const remaining = myItems.filter(product => product._id !== id)
                    setMyItems(remaining)
                }
            })
        }
    }

  return (
    <div className='my-items-section'>
        <div className="container">
            <h4>My Items............{myItems.length}</h4>
        </div>
        {
            myItems &&  <div className="container">
        <div className="row">
          <div className="col-md-8 w-100 mx-auto">
            <div className="table-products mt-3">
              <Table striped bordered hover>
                {
                    myItems &&  
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                 }
                <tbody>
                  {myItems.map((product) => (
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
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>
                        <p className="d-flex"> 
                            <button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button> 
                        </p>
                      </td>
                    </tr>
                  ))} 
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default MyItems
