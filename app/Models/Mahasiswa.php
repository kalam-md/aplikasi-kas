<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pemasukan;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $fillable = [
        'npm', 'nama'
    ];

    public function pemasukan()
    {
        return $this->hasOne(Pemasukan::class);
    }
}
