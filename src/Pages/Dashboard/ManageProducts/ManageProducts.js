import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const cancel = <FontAwesomeIcon icon={faTrash} />
    const update = <FontAwesomeIcon icon={faEdit} />

    const [products] = useProducts();
    const { user } = useAuth();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete the Package?');
        if (proceed) {
            fetch(`https://agile-retreat-45077.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            }).then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        toast.warn("Product Deleted Successfully");
                    }
                })
        }
    }


    return (
        <div className="py-1">
            <h1 className="text-primary fw-bold pb-3"><u>Manage Product</u><span className="fs-6 text-success">(<b>as Admin:</b> {user?.displayName})</span></h1>
            {(products.length !== 0) ?
                <TableContainer>
                    <Table sx={{ minWidth: 650, border: '1px solid gray' }} aria-label="simple table">
                        <TableHead>
                            <TableRow
                                sx={{ backgroundColor: '#DCDCDC', color: 'white' }}
                            >
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">Product Image</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Short Description</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    key={product._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{product?.lightTitle}</TableCell>
                                    <TableCell align="center">
                                        <img height="35px" width="35px" src={product?.lightThumbnail} alt="" />
                                    </TableCell>
                                    <TableCell align="center">{product?.lightPrice}</TableCell>
                                    <TableCell align="center">{product?.lightDescription.slice(0, 25)}...</TableCell>
                                    <TableCell align="center">
                                        <button onClick={() => handleDelete(product?._id)} className="btn btn-danger me-1">{cancel}</button>
                                        <Link to={`/dashboard/updateProduct/${product._id}`}>
                                            <button className="btn btn-warning">{update} Update Product</button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <Spinner animation="border" variant="info" />}
            <ToastContainer />
        </div>
    );
};

export default ManageProducts;