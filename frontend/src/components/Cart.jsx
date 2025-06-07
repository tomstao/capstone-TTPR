import React from "react";
import {useNavigate} from "react-router-dom";
import {
    Drawer,
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    IconButton,
    Button,
    Divider,
    Chip,
    Alert,
} from "@mui/material";
import {Close, Add, Remove, Delete, ShoppingCart} from "@mui/icons-material";
import {useCart} from "../context/CartContext";

function Cart({open, onClose}) {
    const navigate = useNavigate();
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
    } = useCart();

    const handleCheckout = () => {
        onClose();
        navigate("/checkout");
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            updateQuantity(id, newQuantity);
        }
    };

    const subtotal = getTotalPrice();
    const shipping = subtotal > 100 ? 0 : 9.99;

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
                        <ShoppingCart sx={{mr: 1}}/>
                        Cart ({getTotalItems()})
                    </Typography>
                    <IconButton onClick={onClose}>
                        <Close/>
                    </IconButton>
                </Box>

                {/* Cart Items */}
                <Box sx={{flex: 1, overflow: "auto"}}>
                    {cartItems.length === 0 ? (
                        <Box sx={{p: 4, textAlign: "center"}}>
                            <ShoppingCart
                                sx={{fontSize: 64, color: "text.secondary", mb: 2}}
                            />
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Your cart is empty
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
                                Add some items to get started!
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    onClose();
                                    navigate("/");
                                }}
                            >
                                Continue Shopping
                            </Button>
                        </Box>
                    ) : (
                        <List sx={{p: 0}}>
                            {cartItems.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <ListItem
                                        sx={{
                                            py: 2,
                                            px: 2,
                                            flexDirection: "column",
                                            alignItems: "stretch",
                                        }}
                                    >
                                        <Box sx={{display: "flex", alignItems: "center", mb: 1}}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={item.image}
                                                    alt={item.title}
                                                    variant="rounded"
                                                    sx={{width: 60, height: 60}}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{fontWeight: 600}}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                }
                                                secondary={
                                                    <Box>
                                                        <Chip
                                                            label={item.category}
                                                            size="small"
                                                            variant="outlined"
                                                            sx={{fontSize: "0.7rem", mb: 0.5}}
                                                        />
                                                        <Typography variant="h6" color="primary">
                                                            ${item.price}
                                                        </Typography>
                                                    </Box>
                                                }
                                                sx={{mx: 1}}
                                            />
                                            <IconButton
                                                size="small"
                                                onClick={() => removeFromCart(item.id)}
                                                sx={{color: "error.main"}}
                                            >
                                                <Delete/>
                                            </IconButton>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                mt: 1,
                                            }}
                                        >
                                            <Box sx={{display: "flex", alignItems: "center"}}>
                                                <IconButton
                                                    size="small"
                                                    onClick={() =>
                                                        handleQuantityChange(item.id, item.quantity - 1)
                                                    }
                                                >
                                                    <Remove/>
                                                </IconButton>
                                                <Typography
                                                    variant="body1"
                                                    sx={{mx: 2, minWidth: 20, textAlign: "center"}}
                                                >
                                                    {item.quantity}
                                                </Typography>
                                                <IconButton
                                                    size="small"
                                                    onClick={() =>
                                                        handleQuantityChange(item.id, item.quantity + 1)
                                                    }
                                                >
                                                    <Add/>
                                                </IconButton>
                                            </Box>
                                            <Typography variant="h6" color="primary">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    {index < cartItems.length - 1 && <Divider/>}
                                </React.Fragment>
                            ))}
                        </List>
                    )}
                </Box>

                {/* Footer with totals and checkout */}
                {cartItems.length > 0 && (
                    <Box sx={{p: 2, borderTop: 1, borderColor: "divider"}}>
                        <Box sx={{mb: 2}}>
                            <Box
                                sx={{display: "flex", justifyContent: "space-between", mb: 1}}
                            >
                                <Typography>Subtotal:</Typography>
                                <Typography>${subtotal.toFixed(2)}</Typography>
                            </Box>
                            <Box
                                sx={{display: "flex", justifyContent: "space-between", mb: 1}}
                            >
                                <Typography variant="body2" color="text.secondary">
                                    Shipping:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                                </Typography>
                            </Box>
                            <Divider sx={{my: 1}}/>
                            <Box
                                sx={{display: "flex", justifyContent: "space-between", mb: 2}}
                            >
                                <Typography variant="h6" fontWeight="bold">
                                    Total:
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" color="primary">
                                    ${(subtotal + shipping).toFixed(2)}
                                </Typography>
                            </Box>

                            {subtotal < 100 && (
                                <Alert severity="info" sx={{mb: 2, fontSize: "0.8rem"}}>
                                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                                </Alert>
                            )}
                        </Box>

                        <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleCheckout}
                                sx={{py: 1.5}}
                            >
                                Proceed to Checkout
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                fullWidth
                                onClick={clearCart}
                                color="error"
                            >
                                Clear Cart
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Drawer>
    );
}

export default Cart;
