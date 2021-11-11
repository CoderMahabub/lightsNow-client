import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const cancel = <FontAwesomeIcon icon={faTrash} />
    const update = <FontAwesomeIcon icon={faEdit} />

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch('https://agile-retreat-45077.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])

    // Delete My Bookings
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            }).then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsDeleted(true)
                    } else {
                        setIsDeleted(false)
                    }
                })
        }
    }
    return (
        <div className="py-5">
            <h1 className="text-primary fw-bold pb-3"><u>Manage Orders</u><span className="fs-6 text-success">(<b>as Admin:</b> {user?.displayName})</span></h1>
            {(orders.length !== 0) ?
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Customer Email</th>
                                <th scope="col">Customer Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Light Name</th>
                                <th scope="col">Light Price</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr
                                    key={order._id}>
                                    <td scope="row">{order?.cName}</td>
                                    <td>{order?.cEmail}</td>
                                    <td>{order?.cPhone}</td>
                                    <td>{order?.cAddress}</td>
                                    <td>{order?.lightTitle}</td>
                                    <td>${order?.lightPrice}</td>
                                    <td>{order?.status}</td>
                                    <td>
                                        <button onClick={() => handleDelete(order?._id)} className="btn btn-danger me-1">{cancel}</button>
                                        <Link to={`/update/${order?._id}`}>
                                            <button className="btn btn-warning">{update} Change Status</button>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div> : <Spinner animation="border" variant="info" />}
        </div>
    );
};

export default ManageAllOrders;