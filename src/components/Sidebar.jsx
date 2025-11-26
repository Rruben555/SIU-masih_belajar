import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, onClose, navigate, onLogout }) {
  const MenuItem = ({ label, page }) => (
    <button
      onClick={() => {
        navigate(page);
        onClose(); // Close sidebar after clicking
      }}
      className="w-full p-3 my-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
    >
      {label}
    </button>
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-green-900 text-white p-6 shadow-xl z-40
      transition-transform duration-300 flex flex-col
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <h3 className="text-center text-lg font-bold mb-6">Menu</h3>

      <MenuItem label="Profil" page="/profile" />
      <MenuItem label="Pengaturan" page="/settings" />

      <div className="mt-auto text-black">
        <button
          onClick={() => {
            navigate("/login");
            onClose();
          }}
          className="w-full p-3 bg-blue-500 my-2 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          Login
        </button>

        <button
          onClick={() => {
            navigate("/register");
            onClose();
          }}
          className="w-full p-3 bg-yellow-500 my-2 rounded-lg font-bold hover:bg-yellow-600 transition"
        >
          Register
        </button>

        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="w-full p-3 bg-red-500 my-2 rounded-lg font-bold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
