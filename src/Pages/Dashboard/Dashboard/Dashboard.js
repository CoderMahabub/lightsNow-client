import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import MyOrders from "../MyOrders/MyOrders.js"
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../Pay/Pay';
import ReviewPost from '../ReviewPost/ReviewPost';
import NotFound from '../../NotFound/NotFound';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import UpdateProduct from '../ManageProducts/UpdateProduct/UpdateProduct';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReviewsIcon from '@mui/icons-material/Reviews';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function Dashboard(props) {
    const { handleLogout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List sx={{ textAlign: 'left', p: 2 }}>
                <Link to="/"><Button sx={{ bgcolor: 'success.main' }} variant="contained"><HomeIcon /> visit Site</Button> </Link>
                <hr />
                <Link to={`${url}`} ><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"> <DashboardIcon color="success" /> Dashboard</Button> </Link>


                {admin && <Box>
                    <Link to={`${url}/manageOrders`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"><SettingsApplicationsIcon color="success" />Manage Orders</Button> </Link>
                    <Link to={`${url}/addProduct`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"> <AddBoxIcon color="success" />Add Product</Button> </Link>
                    <Link to={`${url}/makeAdmin`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"><ManageAccountsIcon color="success" /> Make Admin</Button> </Link>
                    <Link to={`${url}/manageProducts`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"><SettingsApplicationsIcon color="success" />Manage Products</Button> </Link>
                </Box>}

                {!admin && <Box>
                    <Link to={`${url}/pay`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"> <PaymentIcon color="success" />Pay</Button> </Link>
                    <br />
                    <Link to={`${url}/myOrders`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"><ShoppingBasketIcon color="success" />My Orders</Button> </Link> <br />
                    <Link to={`${url}/reviewPost`}><Button sx={{ color: 'success.main', fontWeight: 'bold' }} color="inherit"> <ReviewsIcon color="success" />Review</Button> </Link>
                </Box>}

                <hr />
                <Button onClick={handleLogout} variant="contained" color="error">
                    LogOut<LogoutIcon />
                </Button>

            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, bgcolor: 'success.main'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {admin ? 'Admin Dashboard' : 'User Dashboard'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/reviewPost`}>
                        <ReviewPost></ReviewPost>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/updateProduct/:productId`}>
                        <UpdateProduct></UpdateProduct>
                    </AdminRoute>
                    <Route path={`${path}/*`}>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
