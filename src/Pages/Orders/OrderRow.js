import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleTodelate }) => {
    const { _id, serviceName, price, coustomer, number, message, service } = order;

    const [orderService, setOrderService] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleTodelate(_id)} className='btn btn-g'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{coustomer}</div>
                        <div className="text-sm opacity-50">{number}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Super Support Technician</span>
            </td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
            </th>
        </tr>
    );
};

export default OrderRow;