import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleToSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const cName = `${form.firstName.value} ${form.lastName.value}`
        const number = form.number.value;
        const email = user?.email || 'unRegister'
        const message = form.message.value;

        // console.log(cName , number , email , message);

        const order = {
            service: _id,
            serviceName: name,
            price,
            coustomer: cName,
            number,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Booking Plased Successfuly')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleToSubmit}>
            <h1 className='text-orange-500 text-2xl font-bold text-center mb-3'>Service type name : {name}</h1>
            <h1 className='text-orange-500 text-xl font-bold text-center mb-10'>Price : ${price}</h1>
            
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-info w-full" required />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full" required />
                    <input name='number' type="number" placeholder="phon" className="input input-bordered input-info w-full" required />
                    <input name='email' type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-info w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-primary h-24 w-full" placeholder="Your Message"></textarea>
            
            <input type="submit" className='btn btn-primary mb-5' value="Place Your Order" />
        </form>
    );
};

export default Checkout;