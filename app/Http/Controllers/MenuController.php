<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Menu/Index');
    }
}
