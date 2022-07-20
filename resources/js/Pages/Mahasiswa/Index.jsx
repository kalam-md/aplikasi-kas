import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Notification from '@/Components/Notification';

export default function IndexMahasiswa(props) {
    const { mahasiswas } = usePage().props;

    function destroy(e) {
        if (confirm("Yakin ingin hapus data mahasiswanya?")) {
            Inertia.delete(route("mahasiswa.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mahasiswa</h2>}>
            <Head title="Mahasiswa" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex justify-between items-center">
                            Halaman Data Mahasiswa
                            <button className="btn btn-primary">
                                <Link href={route('mahasiswa.create')}>
                                    Tambah Data Mahasiswa
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <Notification></Notification> */}

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center gap-4">
                    <div className="card bg-base-100 shadow-xl border-4 border-indigo-200 border-l-indigo-500">
                        <div className="overflow-x-auto">
                            <div className="card-body">
                                <h2 className="card-title">Data Mahasiswa</h2>
                                <table className="table w-full shadow-xl">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>NPM</th>
                                            <th>Nama</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mahasiswas.map(({ id, npm, nama }, i) => (
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td>{npm}</td>
                                                <td>{nama}</td>
                                                <td className="flex flex-row gap-1">
                                                    <Link href={route('mahasiswa.edit', id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-indigo-700 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                                        </svg>
                                                    </Link>
                                                    <button id={id} onClick={destroy} type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-rose-700 h-5 w-5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {mahasiswas.length === 0 && (
                                    <div className="flex justify-center">
                                        <p className="p-4">Belum ada data mahasiswa</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl border-4 border-purple-200 border-l-purple-500">
                        <div className="overflow-x-auto">
                            <div className="card-body">
                                <h2 className="card-title">Data Kas Mahasiswa</h2>
                                <table className="table w-full shadow-xl">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>NPM</th>
                                            <th>Nama</th>
                                            <th>Nominal</th>
                                            <th>Tanggal</th>
                                            <th>Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>203040123</td>
                                            <td>Kalam</td>
                                            <td>Rp. 2000</td>
                                            <td>27 Juni 2022</td>
                                            <td>Bayar kas</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div className="btn-group mt-5 flex justify-center">
                                    <button className="btn btn-outline border-2 border-purple-500">«</button>
                                    <button className="btn btn-outline border-2 border-purple-500">Halaman 22</button>
                                    <button className="btn btn-outline border-2 border-purple-500">»</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
