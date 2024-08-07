<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'area_name'
       ];
    public function area()
    {
        return $this->belongsTo(Area::class);
    }
    public function areas()
    {
        return Area::all();
    }
}
