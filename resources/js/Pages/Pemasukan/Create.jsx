import React from 'react';
import Select from 'react-select'
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function CreatePemasukan(props) {
  const { mahasiswas } = usePage().props;

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let newdate = year + "-" + month + "-" + day;

  const { data, setData, errors, post } = useForm({
    nominal: "",
    tanggal: newdate,
    keterangan: "",
    id_mahasiswa: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route("pemasukan.store"));
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pemasukan</h2>}>
      <Head title="Tambah Data Mahasiswa" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 flex justify-between items-center">
              Halaman Tambah Pemasukan Kas Mahasiswa
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center gap-4">
          <div className="card bg-base-100 shadow-xl border-4 border-indigo-200 border-l-indigo-500">
            <div className="overflow-x-auto">
              <form name="createForm" onSubmit={handleSubmit}>
                <div className="card-body">
                  <h2 className="card-title">Tambah Data Pemasukan</h2>

                  <div className="flex flex-row items-center gap-4">
                    <select className="select select-bordered w-full max-w-xs" name="id_mahasiswa" onChange={(e) => setData("id_mahasiswa", e.target.value)} value={data.id_mahasiswa}>
                      {mahasiswas.map((mahasiswa, i) => (
                        <option value={mahasiswa.id} key={i} errors={errors.id_mahasiswa}>{mahasiswa.nama}</option>
                      ))}
                    </select>

                    <div className="form-control w-full max-w-xs">
                      <input type="number" placeholder="Nominal" className="input input-bordered w-full max-w-xs" name="nominal" errors={errors.nominal} value={data.nominal} onChange={(e) => setData("nominal", e.target.value)} />
                      <span className="text-red-600">
                        {errors.nominal}
                      </span>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <input type="text" placeholder="Keterangan" className="input input-bordered w-full max-w-xs" name="keterangan" errors={errors.keterangan} value={data.keterangan} onChange={(e) => setData("keterangan", e.target.value)} />
                      <span className="text-red-600">
                        {errors.keterangan}
                      </span>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <button type="submit" className="btn btn-primary">
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </Authenticated >
  );
}