<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'menu_name', 'image', 'price'
    ];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    public function orders()
    {
        return Order::all();
    }
}
