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
      className={`fixed top-0 right-0 h-full w-64 bg-emerald-400 text-white p-6 shadow-xl z-40
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
          className="w-full p-3 bg-gray-800 my-2 rounded-lg font-bold hover:bg-gray-400 transition text-white"
        >
          Login
        </button>

        <button
          onClick={() => {
            navigate("/register");
            onClose();
          }}
          className="w-full p-3 bg-gray-800 my-2 rounded-lg font-bold hover:bg-gray-400 transition text-white"
        >
          Register
        </button>

        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="w-full p-3 bg-gray-800 my-2 rounded-lg font-bold hover:bg-gray-400 transition text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
