import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'; // Jika belum install, npm install react-hot-toast

const FormContainer = ({ children, title }) => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 flex items-center justify-center p-6">
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-sm w-full">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </div>
  </div>
);

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Handler untuk reset password
  const handleResetPassword = () => {
    // Validasi dasar
    if (!email) {
      toast.error("Email harus diisi!");
      return;
    }

    // Simulasi pengiriman email reset (ganti dengan API call nyata)
    console.log("Reset password untuk email:", email);
    toast.success("Email reset password telah dikirim! Periksa inbox Anda.");

    // Opsional: Navigasi kembali ke login setelah beberapa detik
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <FormContainer title="Lupa Password">
      <Toaster /> {/* Untuk notifications */}

      <p className="text-center text-sm mb-4 text-white">
        Masukkan email Anda untuk menerima link reset password.
      </p>

      <input
        className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleResetPassword}
        className="w-full p-3 mt-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
      >
        Kirim Reset Password
      </button>

      <button
        onClick={() => navigate("/login")}
        className="w-full p-3 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
      >
        Kembali ke Login
      </button>

      <button
        onClick={() => navigate("/")}
        className="w-full p-3 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
      >
        Back to Home
      </button>
    </FormContainer>
  );
}
