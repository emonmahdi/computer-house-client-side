import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';


import './AddNewItem.css'

const AddNewItem = () => { 
    const [user] = useAuthState(auth);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const addProduct = {
            email: user.email,
            name: e.target.name.value,
            img: e.target.img.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            suppliers: e.target.suppliers.value,
            category: e.target.category.value,
            description: e.target.description.value,

        }
        console.log(addProduct);
        axios.post('https://computer-house-app.onrender.com/product', addProduct)
        .then(res => {
            console.log(res);
            const {data} = res;
            if(data.insertedId){
                toast("Add inventory Successfully!")
                e.target.reset();
            }
        })
    }   

  return (
    <div className='add-new-inventory-section'>
      <h4>Add new Inventory</h4>
      <div className="container">
        <div className="row">
            <div className="col-md-8 mx-auto">
            <form onSubmit={handlePlaceOrder} className='bg-light p-3 rounded-3'>
                <div>
                    <input className='form-control mb-3' type="text" placeholder='Inventory Name' name='name' required />
                </div>
                <div>
                    <input className='form-control mb-3' type="text" placeholder='Image Link' name='img' required />
                </div>
                <div>
                    <input className='form-control mb-3' type="text" placeholder='Price' name='price' />
                </div>
                <div>
                    <input className='form-control mb-3' type="number" placeholder='Quantity' name='quantity' />
                </div>
                <div>
                    <input className='form-control mb-3' type="text" placeholder='Suppliers Name' name='suppliers' />
                </div>
                <div>
                    <select className='form-control mb-3' name="category" id="">
                        <option value="Default">Select Category</option>
                        <option value="laptop">Laptop</option>
                        <option value="battery">Battery</option>
                        <option value="charger">Charger</option>
                        <option value="desktop">Desktop</option>
                        <option value="monitor">Monitor</option>
                        <option value="processor">Processor</option>
                    </select>
                    {/* <input className='form-control mb-3' type="text" placeholder='Category' name='category' /> */}
                </div>
                <div>
                    <textarea className='form-control mb-3' name='description' type="text" rows='5' col='10' placeholder='Description' /> 
                </div>
                <div>
                    <input type="submit" className='btn btn-dark' value="Add Inventory" />
                </div>
            </form>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default AddNewItem
