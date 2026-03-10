import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import { useCart } from "../features/cart/useCart";

export default function Navbar() {

    const auth = useAuth();
    const cart = useCart();
    console.log("AuthContext value:", auth);
    console.log("CartContext value:", cart);
    const { user, logout } = auth;
    const { state } = cart;

    const itemCount = state.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px",
                borderBottom: "1px solid #ccc",
            }}
        >
            <div>
                <Link to="/" style={{ marginRight: "15px" }}>
                    Home
                </Link>

                <Link to="/cart">
                    Cart ({itemCount})
                </Link>
            </div>

            <div>
                {user ? (
                    <>
                        <span style={{ marginRight: "10px" }}>
                            Hello, {user.name}
                        </span>

                        <button onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}