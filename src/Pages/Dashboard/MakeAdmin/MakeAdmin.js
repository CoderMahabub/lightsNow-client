import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const proceed = window.confirm('Are you sure, You want to make this email an ADMIN?');
        if (proceed) {
            const user = { email };
            fetch('https://agile-retreat-45077.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        // console.log(data)
                        setSuccess(true);
                        setEmail('')
                        toast.success("Admin Created Successfully", {
                            position: "top-right"
                        });
                    }
                    else {
                        toast.warn("This email,Already Admin", {
                            position: "top-right"
                        });
                    }

                })
            e.preventDefault();
        }
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button sx={{ bgcolor: 'success.main' }} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <ToastContainer />}
        </div>
    );
};

export default MakeAdmin;