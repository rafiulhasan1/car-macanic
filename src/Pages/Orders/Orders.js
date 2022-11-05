import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleTodelate = id => {
        const proceed = window.confirm('are you sure to delate the order')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert('deleted successfully')
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2>You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button className='btn btn-ghost'>X</button>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Cars Problem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} handleTodelate={handleTodelate} order={order}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;