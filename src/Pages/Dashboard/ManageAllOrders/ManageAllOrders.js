import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ManageAllOrders = () => {
    const cancel = <FontAwesomeIcon icon={faTrash} />
    const update = <FontAwesomeIcon icon={faEdit} />

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        fetch('https://agile-retreat-45077.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, status])

    // Delete My Bookings
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            fetch(`https://agile-retreat-45077.herokuapp.com/deleteOrder/${id}`, {
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

    //Handle Status Change
    const handleStatusChange = (id) => {
        const proceed = window.confirm('Are you sure, you want to change Status Pending to Shipped?');
        if (proceed) {
            fetch(`https://agile-retreat-45077.herokuapp.com/changeStatus/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setStatus(!status);
                    }
                    else {
                        alert('Order Already Shipped')
                    }
                })
        }
    }

    return (
        <div className="py-1">
            <h1 className="text-primary fw-bold pb-3"><u>Manage Orders</u><span className="fs-6 text-success">(<b>as Admin:</b> {user?.displayName})</span></h1>
            {(orders.length !== 0) ?
                <TableContainer>
                    <Table sx={{ minWidth: 650, border: '1px solid gray' }} aria-label="simple table">
                        <TableHead>
                            <TableRow
                                sx={{ backgroundColor: '#DCDCDC', color: 'white' }}
                            >
                                <TableCell>Customer Name</TableCell>
                                <TableCell align="center">Customer Email</TableCell>
                                <TableCell align="center">Customer Phone</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Light Name</TableCell>
                                <TableCell align="center">Light Price</TableCell>
                                <TableCell align="center">Order Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                    key={order._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{order?.cName}</TableCell>
                                    <TableCell align="center">{order?.cEmail}</TableCell>
                                    <TableCell align="center">{order?.cPhone}</TableCell>
                                    <TableCell align="center">{order?.cAddress}</TableCell>
                                    <TableCell align="center">{order?.lightTitle}</TableCell>
                                    <TableCell align="center">${order?.lightPrice}</TableCell>
                                    <TableCell align="center">{order?.status}</TableCell>
                                    <TableCell align="center">
                                        <button onClick={() => handleDelete(order?._id)} className="btn btn-danger me-1">{cancel}</button>
                                        <button onClick={() => handleStatusChange(order._id)} className="btn btn-warning">{update} Change Status</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <Spinner animation="border" variant="info" />}
        </div>
    );
};

export default ManageAllOrders;