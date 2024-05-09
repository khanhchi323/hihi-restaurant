<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    
    public function index()
    {
        $areas = Area::all();
        return  Inertia::render('Admin/Area/List', compact('areas'));
    }
}
