export default function Profile({ anggota, kegiatan }) {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg text-center">

        {/* FOTO PROFIL */}
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-600"
        />

        {/* NAMA USER */}
        <h2 className="text-3xl font-bold text-gray-800">Nama Pengguna</h2>
        <p className="text-gray-600 mb-6">email@example.com</p>

        <hr className="my-6" />

        {/* STATUS ANGGOTA */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Status Anggota</span>
          <span
            className={`px-3 py-1 rounded-full text-white text-sm ${
              anggota ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {anggota ? "Sudah Terdaftar" : "Belum Terdaftar"}
          </span>
        </div>

        {/* STATUS KEGIATAN */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Status Kegiatan</span>
          <span
            className={`px-3 py-1 rounded-full text-white text-sm ${
              kegiatan ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {kegiatan ? "Sudah Terdaftar" : "Belum Terdaftar"}
          </span>
        </div>

      </div>
    </div>
  );
}