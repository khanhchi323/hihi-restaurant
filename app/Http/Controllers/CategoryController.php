<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
        //get 
    public function index()
    {
        $categories = Category::all();
        return  Inertia::render('Admin/Category/List', compact('categories'));
    }

    public function create(){
        return Inertia::render('Admin/Category/Create');
    }
    public function edit(){
        return Inertia::render('Admin/Category/Edit');
    }

    public function store(Request $request) : RedirectResponse {
        Category::create([
            'name',
            'image',

        ]);
        return Redirect::route('categories.index');
    }
}
