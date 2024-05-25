<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menus extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'image','price', 'category_id'
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
