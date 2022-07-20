import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Selamat Datang</div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center flex-row flex-wrap item-strech gap-4 mb-10">
                    <div className="card w-96 bg-base-100 shadow-xl border-4 border-indigo-200 border-l-indigo-500">
                        <div className="card-body">
                            <h2 className="card-title">Pemasukan</h2>
                            <p className="my-3 text-5xl text-inherit font-bold">Rp. 200.000</p>
                            <p className="text-sm text-base">Bulan ini</p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Lihat</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-4 border-rose-200 border-l-rose-500">
                        <div className="card-body">
                            <h2 className="card-title">Pengeluaran</h2>
                            <p className="my-3 text-5xl text-inherit font-bold">Rp. 50.000</p>
                            <p className="text-sm text-base">Bulan ini</p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Lihat</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-4 border-teal-200 border-l-teal-500">
                        <div className="card-body">
                            <h2 className="card-title">Total Saldo</h2>
                            <p className="my-3 text-5xl text-inherit font-bold">Rp. 150.000</p>
                            {/* <p className="text-sm text-base">Bulan ini</p> */}
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Lihat</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center">
                    <div className="card bg-base-100 shadow-xl border-4 border-purple-200 border-l-purple-500">
                        <div className="overflow-x-auto">
                            <div className="card-body">
                                <h2 className="card-title">Catatan Kas Mahasiswa</h2>
                                <table className="table lg:w-full shadow-xl">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Tanggal</th>
                                            <th>Pengeluaran</th>
                                            <th>Saldo</th>
                                            <th>Total Saldo</th>
                                            <th>Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>23 Juni 2022</td>
                                            <td>Rp. 10.000</td>
                                            <td>Rp. 100.000</td>
                                            <td>Rp. 90.000</td>
                                            <td>Buat Holiday</td>
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
