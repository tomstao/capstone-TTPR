import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    TextField,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Chip,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Alert,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";
import {
    ShoppingCart,
    LocalShipping,
    Payment,
    CheckCircle,
} from "@mui/icons-material";
import {useCart} from "../context/CartContext";

const steps = ["Review Order", "Shipping Info", "Payment", "Confirmation"];

function Checkout() {
    const navigate = useNavigate();
    const {cartItems, getTotalPrice, clearCart} = useCart();
    const [activeStep, setActiveStep] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [shippingInfo, setShippingInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
        paymentMethod: "credit",
    });

    const [errors, setErrors] = useState({});

    // Redirect if cart is empty
    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <Container maxWidth="md" sx={{py: 8}}>
                <Paper elevation={3} sx={{p: 4, textAlign: "center"}}>
                    <ShoppingCart sx={{fontSize: 64, color: "text.secondary", mb: 2}}/>
                    <Typography variant="h4" gutterBottom>
                        Your cart is empty
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{mb: 3}}>
                        Add some items to your cart before proceeding to checkout.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate("/")}
                        size="large"
                    >
                        Continue Shopping
                    </Button>
                </Paper>
            </Container>
        );
    }

    const handleShippingChange = (e) => {
        const {name, value} = e.target;
        setShippingInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handlePaymentChange = (e) => {
        const {name, value} = e.target;
        setPaymentInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateShipping = () => {
        const newErrors = {};

        if (!shippingInfo.firstName.trim())
            newErrors.firstName = "First name is required";
        if (!shippingInfo.lastName.trim())
            newErrors.lastName = "Last name is required";
        if (!shippingInfo.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!shippingInfo.phone.trim())
            newErrors.phone = "Phone number is required";
        if (!shippingInfo.address.trim()) newErrors.address = "Address is required";
        if (!shippingInfo.city.trim()) newErrors.city = "City is required";
        if (!shippingInfo.state.trim()) newErrors.state = "State is required";
        if (!shippingInfo.zipCode.trim())
            newErrors.zipCode = "ZIP code is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePayment = () => {
        const newErrors = {};

        if (!paymentInfo.cardholderName.trim())
            newErrors.cardholderName = "Cardholder name is required";
        if (!paymentInfo.cardNumber.trim()) {
            newErrors.cardNumber = "Card number is required";
        } else if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, ""))) {
            newErrors.cardNumber = "Card number must be 16 digits";
        }
        if (!paymentInfo.expiryDate.trim()) {
            newErrors.expiryDate = "Expiry date is required";
        } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentInfo.expiryDate)) {
            newErrors.expiryDate = "Expiry date must be in MM/YY format";
        }
        if (!paymentInfo.cvv.trim()) {
            newErrors.cvv = "CVV is required";
        } else if (!/^\d{3,4}$/.test(paymentInfo.cvv)) {
            newErrors.cvv = "CVV must be 3 or 4 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (activeStep === 1 && !validateShipping()) return;
        if (activeStep === 2 && !validatePayment()) return;

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handlePlaceOrder = async () => {
        try {
            // TODO: Replace with actual API call
            console.log("Order placed:", {
                items: cartItems,
                shipping: shippingInfo,
                payment: {
                    ...paymentInfo,
                    cardNumber: "****" + paymentInfo.cardNumber.slice(-4),
                },
                total: getTotalPrice(),
            });

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setOrderPlaced(true);
            clearCart();
            setActiveStep(3);
        } catch (error) {
            console.error("Order placement failed:", error);
            setErrors({general: "Failed to place order. Please try again."});
        }
    };

    const subtotal = getTotalPrice();
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    const renderOrderSummary = () => (
        <Paper elevation={2} sx={{p: 3}}>
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>
            <List>
                {cartItems.map((item) => (
                    <ListItem key={item.id} sx={{px: 0}}>
                        <ListItemAvatar>
                            <Avatar
                                src={item.image}
                                alt={item.title}
                                variant="rounded"
                                sx={{width: 60, height: 60}}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.title}
                            secondary={
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Quantity: {item.quantity}
                                    </Typography>
                                    <Chip
                                        label={item.category}
                                        size="small"
                                        variant="outlined"
                                        sx={{mt: 0.5, fontSize: "0.7rem"}}
                                    />
                                </Box>
                            }
                            sx={{mx: 2}}
                        />
                        <Typography variant="h6" color="primary">
                            ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{my: 2}}/>
            <Box sx={{display: "flex", justifyContent: "space-between", mb: 1}}>
                <Typography>Subtotal:</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", mb: 1}}>
                <Typography>Shipping:</Typography>
                <Typography>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                <Typography>Tax:</Typography>
                <Typography>${tax.toFixed(2)}</Typography>
            </Box>
            <Divider sx={{mb: 2}}/>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" fontWeight="bold">
                    Total:
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="primary">
                    ${total.toFixed(2)}
                </Typography>
            </Box>
            {subtotal < 100 && (
                <Alert severity="info" sx={{mt: 2}}>
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </Alert>
            )}
        </Paper>
    );

    const renderShippingForm = () => (
        <Paper elevation={2} sx={{p: 3}}>
            <Box sx={{display: "flex", alignItems: "center", mb: 3}}>
                <LocalShipping sx={{mr: 1, color: "primary.main"}}/>
                <Typography variant="h6">Shipping Information</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="firstName"
                        label="First Name"
                        value={shippingInfo.firstName}
                        onChange={handleShippingChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        value={shippingInfo.lastName}
                        onChange={handleShippingChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={handleShippingChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        value={shippingInfo.phone}
                        onChange={handleShippingChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="address"
                        label="Street Address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        error={!!errors.address}
                        helperText={errors.address}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="city"
                        label="City"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        error={!!errors.city}
                        helperText={errors.city}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="state"
                        label="State"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        error={!!errors.state}
                        helperText={errors.state}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        name="zipCode"
                        label="ZIP Code"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        error={!!errors.zipCode}
                        helperText={errors.zipCode}
                        required
                    />
                </Grid>
            </Grid>
        </Paper>
    );

    const renderPaymentForm = () => (
        <Paper elevation={2} sx={{p: 3}}>
            <Box sx={{display: "flex", alignItems: "center", mb: 3}}>
                <Payment sx={{mr: 1, color: "primary.main"}}/>
                <Typography variant="h6">Payment Information</Typography>
            </Box>

            <FormControl component="fieldset" sx={{mb: 3}}>
                <FormLabel component="legend">Payment Method</FormLabel>
                <RadioGroup
                    value={paymentInfo.paymentMethod}
                    onChange={handlePaymentChange}
                    name="paymentMethod"
                    row
                >
                    <FormControlLabel
                        value="credit"
                        control={<Radio/>}
                        label="Credit Card"
                    />
                    <FormControlLabel
                        value="debit"
                        control={<Radio/>}
                        label="Debit Card"
                    />
                </RadioGroup>
            </FormControl>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="cardholderName"
                        label="Cardholder Name"
                        value={paymentInfo.cardholderName}
                        onChange={handlePaymentChange}
                        error={!!errors.cardholderName}
                        helperText={errors.cardholderName}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="cardNumber"
                        label="Card Number"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentChange}
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber}
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="expiryDate"
                        label="Expiry Date"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentChange}
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate}
                        placeholder="MM/YY"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="cvv"
                        label="CVV"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        error={!!errors.cvv}
                        helperText={errors.cvv}
                        placeholder="123"
                        required
                    />
                </Grid>
            </Grid>
        </Paper>
    );

    const renderConfirmation = () => (
        <Paper elevation={2} sx={{p: 4, textAlign: "center"}}>
            <CheckCircle sx={{fontSize: 80, color: "success.main", mb: 2}}/>
            <Typography variant="h4" gutterBottom color="success.main">
                Order Placed Successfully!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{mb: 3}}>
                Thank you for your purchase. You will receive a confirmation email
                shortly.
            </Typography>
            <Box sx={{display: "flex", gap: 2, justifyContent: "center"}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/")}
                    size="large"
                >
                    Continue Shopping
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => navigate("/orders")}
                    size="large"
                >
                    View Orders
                </Button>
            </Box>
        </Paper>
    );

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return renderOrderSummary();
            case 1:
                return renderShippingForm();
            case 2:
                return renderPaymentForm();
            case 3:
                return renderConfirmation();
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                Checkout
            </Typography>

            <Stepper activeStep={activeStep} sx={{mb: 4}}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {errors.general && (
                <Alert severity="error" sx={{mb: 3}}>
                    {errors.general}
                </Alert>
            )}

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    {getStepContent(activeStep)}
                </Grid>

                {activeStep < 3 && (
                    <Grid item xs={12} md={4}>
                        {renderOrderSummary()}
                    </Grid>
                )}
            </Grid>

            {activeStep < 3 && (
                <Box sx={{display: "flex", justifyContent: "space-between", mt: 4}}>
                    <Button disabled={activeStep === 0} onClick={handleBack} size="large">
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        onClick={activeStep === 2 ? handlePlaceOrder : handleNext}
                        size="large"
                    >
                        {activeStep === 2 ? "Place Order" : "Next"}
                    </Button>
                </Box>
            )}
        </Container>
    );
}

export default Checkout;
