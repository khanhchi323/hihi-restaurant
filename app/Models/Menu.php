<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'image','price', 'description', 'category_name'
       ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function categories()
    {
        return Category::all();
    }
}
