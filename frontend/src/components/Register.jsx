import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
    Divider,
    Alert,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Email,
    Lock,
    Person,
} from "@mui/icons-material";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password =
                "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = "You must agree to the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // TODO: Replace with actual API call
            console.log("Register attempt:", formData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // On success, redirect to login or home
            navigate("/login");
        } catch (err) {
            console.error("Registration error:", err);
            setErrors({general: "Registration failed. Please try again."});
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{py: 8}}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Box sx={{textAlign: "center", mb: 4}}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create Account
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Join us and start shopping today
                    </Typography>
                </Box>

                {errors.general && (
                    <Alert severity="error" sx={{mb: 3}}>
                        {errors.general}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <TextField
                            fullWidth
                            name="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person color="action"/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person color="action"/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <TextField
                        fullWidth
                        name="email"
                        type="email"
                        label="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email color="action"/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        fullWidth
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color="action"/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        fullWidth
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        label="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color="action"/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2">
                                I agree to the{" "}
                                <Link to="/terms" style={{color: "#4CAF50"}}>
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link to="/privacy" style={{color: "#4CAF50"}}>
                                    Privacy Policy
                                </Link>
                            </Typography>
                        }
                        sx={{mt: 2, alignItems: "flex-start"}}
                    />
                    {errors.agreeToTerms && (
                        <Typography variant="body2" color="error" sx={{mt: 1, ml: 4}}>
                            {errors.agreeToTerms}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                        sx={{
                            mt: 3,
                            mb: 2,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                        }}
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                </Box>

                <Divider sx={{my: 3}}>
                    <Typography variant="body2" color="text.secondary">
                        OR
                    </Typography>
                </Divider>

                <Box sx={{textAlign: "center"}}>
                    <Typography variant="body2" color="text.secondary">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            style={{
                                color: "#4CAF50",
                                textDecoration: "none",
                                fontWeight: 600,
                            }}
                        >
                            Sign in here
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default Register;
