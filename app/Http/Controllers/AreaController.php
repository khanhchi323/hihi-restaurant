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
    public function create(){
        return Inertia::render('Admin/Menu/Create');
    }

public function edit(){
    return Inertia::render('Admin/Menu/Edit');
}
}
