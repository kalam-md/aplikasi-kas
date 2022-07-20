import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function EditMahasiswa(props) {
  const { mahasiswa } = usePage().props;
  const { data, setData, errors, put } = useForm({
    npm: mahasiswa.npm || "",
    nama: mahasiswa.nama || ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route("mahasiswa.update", mahasiswa.id));
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mahasiswa</h2>}>
      <Head title="Tambah Data Mahasiswa" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 flex justify-between items-center">
              Halaman Edit Data Mahasiswa
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center gap-4">
          <div className="card bg-base-100 shadow-xl border-4 border-indigo-200 border-l-indigo-500">
            <div className="overflow-x-auto">
              <form name="createForm" onSubmit={handleSubmit}>
                <div className="card-body">
                  <h2 className="card-title">Edit Data Mahasiswa</h2>
                  <div className="flex flex-row items-center gap-4">
                    <div className="form-control w-full max-w-xs">
                      <input type="text" placeholder="NPM" className="input input-bordered w-full max-w-xs" name="npm" errors={errors.npm} value={data.npm} onChange={(e) => setData("npm", e.target.value)} />
                      <span className="text-red-600">
                        {errors.npm}
                      </span>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <input type="text" placeholder="Nama" className="input input-bordered w-full max-w-xs" name="nama" errors={errors.nama} value={data.nama} onChange={(e) => setData("nama", e.target.value)} />
                      <span className="text-red-600">
                        {errors.nama}
                      </span>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <button type="submit" className="btn btn-primary">
                        Ubah
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}