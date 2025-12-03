import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AdminPage = () => {
  const [pendaftar, setPendaftar] = useState([]); // Daftar pendaftar pending
  const [ukmList, setUkmList] = useState([]); // Daftar UKM untuk dropdown
  const [newUkm, setNewUkm] = useState({ nama: '', deskripsi: '' }); // State untuk form tambah UKM
  const [loading, setLoading] = useState(false);

  // Fetch data saat komponen mount
  useEffect(() => {
    // Di useEffect, ganti fetchPendaftar dan fetchUkm dengan:

  }, []);

  const fetchPendaftar = async () => {
    try {
      const response = await axios.get('/api/pendaftar?status=pending'); // Asumsi API endpoint
      setPendaftar(response.data);
    } catch (error) {
      toast.error('Gagal memuat pendaftar');
    }
  };

  const fetchUkm = async () => {
    try {
      const response = await axios.get('/api/ukm'); // Asumsi API endpoint
      setUkmList(response.data);
    } catch (error) {
      toast.error('Gagal memuat UKM');
    }
  };

  // Handler untuk tambah UKM
  const handleAddUkm = async (e) => {
    e.preventDefault();
    if (!newUkm.nama || !newUkm.deskripsi) {
      toast.error('Nama dan deskripsi UKM wajib diisi');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/ukm', newUkm); // Asumsi API endpoint
      toast.success('UKM berhasil ditambahkan');
      setNewUkm({ nama: '', deskripsi: '' });
      fetchUkm(); // Refresh daftar UKM
    } catch (error) {
      toast.error('Gagal menambah UKM');
    } finally {
      setLoading(false);
    }
  };

  // Handler untuk accept/reject pendaftar
  const handleUpdateStatus = async (id, status) => {
    if (!window.confirm(`Apakah Anda yakin ingin ${status === 'accepted' ? 'menerima' : 'menolak'} pendaftar ini?`)) return;
    try {
      await axios.put(`/api/pendaftar/${id}`, { status }); // Asumsi API endpoint
      toast.success(`Pendaftar berhasil di${status === 'accepted' ? 'terima' : 'tolak'}`);
      fetchPendaftar(); // Refresh daftar pendaftar
    } catch (error) {
      toast.error('Gagal update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Toaster /> {/* Untuk notifications */}
      <h1 className="text-3xl font-bold mb-6 text-center">Panel Admin UKM</h1>

      {/* Form Tambah UKM */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Tambah UKM Baru</h2>
        <form onSubmit={handleAddUkm}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nama UKM</label>
            <input
              type="text"
              value={newUkm.nama}
              onChange={(e) => setNewUkm({ ...newUkm, nama: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Deskripsi</label>
            <textarea
              value={newUkm.deskripsi}
              onChange={(e) => setNewUkm({ ...newUkm, deskripsi: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Menambah...' : 'Tambah UKM'}
          </button>
        </form>
      </div>

      {/* Daftar Pendaftar Pending */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Daftar Pendaftar Pending</h2>
        {pendaftar.length === 0 ? (
          <p className="text-gray-500">Tidak ada pendaftar pending.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Nama</th>
                  <th className="border border-gray-300 px-4 py-2">NIM</th>
                  <th className="border border-gray-300 px-4 py-2">UKM</th>
                  <th className="border border-gray-300 px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {pendaftar.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{p.nama}</td>
                    <td className="border border-gray-300 px-4 py-2">{p.nim}</td>
                    <td className="border border-gray-300 px-4 py-2">{p.ukm_nama}</td>
                    <td className="border border-gray-300 px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleUpdateStatus(p.id, 'accepted')}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(p.id, 'rejected')}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;