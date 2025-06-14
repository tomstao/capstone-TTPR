import React from "react";
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Button,
    Chip,
    Paper,
} from "@mui/material";
import {
    Close,
    AccountCircle,
    ShoppingBag,
    LocalShipping,
    CheckCircle,
} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

// Mock orders data - replace with actual API call later
const mockOrders = [
    {
        id: "ORD001",
        date: "2024-03-15",
        status: "Delivered",
        total: 129.99,
        items: [
            {
                id: 1,
                title: "Naruto Uzumaki Figure",
                image: "/images/products/naruto.jpg",
                quantity: 1,
                price: 79.99,
            },
            {
                id: 2,
                title: "Sasuke Uchiha Figure",
                image: "/images/products/sasuke.jpg",
                quantity: 1,
                price: 50.0,
            },
        ],
    },
    {
        id: "ORD002",
        date: "2024-03-10",
        status: "Processing",
        total: 49.99,
        items: [
            {
                id: 3,
                title: "Goku Super Saiyan Figure",
                image: "/images/products/goku.jpg",
                quantity: 1,
                price: 49.99,
            },
        ],
    },
];

function UserPanel({open, onClose}) {
    const navigate = useNavigate();

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "success";
            case "processing":
                return "warning";
            case "shipped":
                return "info";
            default:
                return "default";
        }
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return <CheckCircle fontSize="small"/>;
            case "processing":
                return <ShoppingBag fontSize="small"/>;
            case "shipped":
                return <LocalShipping fontSize="small"/>;
            default:
                return null;
        }
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 400,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        p: 2,
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{display: "flex", alignItems: "center"}}
                    >
                        <AccountCircle sx={{mr: 1}}/>
                        My Account
                    </Typography>
                    <IconButton onClick={onClose}>
                        <Close/>
                    </IconButton>
                </Box>

                {/* User Info */}
                <Paper elevation={0} sx={{p: 2, m: 2, bgcolor: "background.default"}}>
                    <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                        <Avatar sx={{width: 64, height: 64, mr: 2}}>
                            <AccountCircle sx={{fontSize: 40}}/>
                        </Avatar>
                        <Box>
                            <Typography variant="h6">John Doe</Typography>
                            <Typography variant="body2" color="text.secondary">
                                john.doe@example.com
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => {
                            onClose();
                            navigate("/profile");
                        }}
                    >
                        Edit Profile
                    </Button>
                </Paper>

                {/* Orders Section */}
                <Box sx={{p: 2, flex: 1, overflow: "auto"}}>
                    <Typography variant="h6" gutterBottom>
                        Order History
                    </Typography>
                    <List>
                        {mockOrders.map((order) => (
                            <React.Fragment key={order.id}>
                                <ListItem
                                    sx={{
                                        flexDirection: "column",
                                        alignItems: "stretch",
                                        py: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 1,
                                        }}
                                    >
                                        <Typography variant="subtitle2">
                                            Order #{order.id}
                                        </Typography>
                                        <Chip
                                            icon={getStatusIcon(order.status)}
                                            label={order.status}
                                            color={getStatusColor(order.status)}
                                            size="small"
                                        />
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {new Date(order.date).toLocaleDateString()}
                                    </Typography>
                                    <List sx={{width: "100%", bgcolor: "background.paper"}}>
                                        {order.items.map((item) => (
                                            <ListItem key={item.id} sx={{py: 1}}>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        src={item.image}
                                                        alt={item.title}
                                                        variant="rounded"
                                                        sx={{width: 40, height: 40}}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={item.title}
                                                    secondary={`Qty: ${item.quantity}`}
                                                />
                                                <Typography variant="body2">
                                                    ${item.price.toFixed(2)}
                                                </Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            mt: 1,
                                        }}
                                    >
                                        <Typography variant="subtitle2">Total:</Typography>
                                        <Typography variant="subtitle2" color="primary">
                                            ${order.total.toFixed(2)}
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <Divider/>
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
}

export default UserPanel;
