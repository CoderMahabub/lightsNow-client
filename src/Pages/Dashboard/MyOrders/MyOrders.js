import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const MyOrders = () => {
    const cancel = <FontAwesomeIcon icon={faTrash} />
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);


    useEffect(() => {
        fetch('https://agile-retreat-45077.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])
    const singleOrder = orders?.filter(order => order.cEmail === user.email);


    // Cancel Own Orders
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, You want to Cancel the Booking?');
        if (proceed) {
            fetch(`https://agile-retreat-45077.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            }).then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsDeleted(!isDeleted)
                    }
                })
        }
    }

    return (
        <div className="py-1">
            <h1 className="text-danger fw-bold my-2">My Orders</h1>
            <hr className="mb-4 bg-danger py-1 mt-0 d-inline-block mx-auto title-bottom" />
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
                            {singleOrder.map((order) => (
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

export default MyOrders;