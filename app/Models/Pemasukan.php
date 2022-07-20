<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Mahasiswa;

class Pemasukan extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $fillable = [
        'nominal', 'tanggal', 'keterangan', 'id_mahasiswa'
    ];

    public function mahasiswa()
    {
        return $this->belongsTo(Mahasiswa::class, 'id_mahasiswa', 'id');
    }
}
