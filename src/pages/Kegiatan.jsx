import { useState } from 'react';
import { ukmData } from '../data/ukmData';

function Kegiatan({ setKegiatanTerdaftar }) {
  const [data, setData] = useState(ukmData);

  const handleDaftar = (ukmId, indexKegiatan) => {
    const updated = data.map((ukm) => {
      if (ukm.id === ukmId) {
        ukm.kegiatan[indexKegiatan].terdaftar = true;
      }
      return ukm;
    });
    setData([...updated]);
    setKegiatanTerdaftar(true);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Daftar Kegiatan</h1>

      {data.map((ukm) => (
        <div key={ukm.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{ukm.nama}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukm.kegiatan.map((keg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{keg.nama}</h3>
                <p className="text-gray-500 mb-2">{keg.tanggal}</p>
                <p className="text-gray-700">{keg.deskripsi}</p>

                {/* BUTTON */}
                <button
                  onClick={() => handleDaftar(ukm.id, index)}
                  disabled={keg.terdaftar}
                  className={`px-5 py-2 rounded-lg shadow-md transition mt-4 w-full
                    ${keg.terdaftar
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-700 hover:bg-green-800 text-white'}`}
                >
                  {keg.terdaftar ? 'Terdaftar' : 'Ikuti Kegiatan'}
                </button>
                {/* END BUTTON */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Kegiatan;
