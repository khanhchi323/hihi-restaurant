<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function create(){
        return Inertia::render('Admin/Category/Create');
    }

    public function index(){
        return Inertia::render('Admin/Category/Index');
    }

    public function store(Request $request) : RedirectResponse {
        Category::create([
            'name',
            'image',

        ]);
        return Redirect::route('categories.index');
    }
}
