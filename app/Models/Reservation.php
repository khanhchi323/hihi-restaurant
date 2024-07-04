<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $table = 'reservation';

    protected $fillable = [
        'customer_name',
        'phone_number',
        'email',
        'reservation_date',
        'reservation_time',
        'number_of_guests',
        // 'id_table',
        
    ];

    public function table()
    {
        return $this->belongsTo(Table::class, 'id_table');
    }
}
