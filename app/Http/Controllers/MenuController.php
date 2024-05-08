<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MenuController extends Controller
{
public function create(){
    return Inertia::render('Admin/Menu/Create');
}
public function index(){
    return Inertia::render('Admin/Menu/Index');
}
}