<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Admin/Category/Edit', compact('category'));
    }


    public function index()
    {
        $categories = Category::all(); 

   
        foreach ($categories as $category) {
            $category->image_url = Storage::url($category->image);
        }

        return Inertia::render('Admin/Category/List', [
            'categories' => $categories
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
        }

        $category = new Category();
        $category->name = $request->name;
        $category->image = $imagePath; 
        $category->save();

        return redirect()->route('category.list')->with('success', 'Category created successfully!');
    }

    public function edit(Category $category)
    {
        if (!$category) {
            abort(404);
        }
        return Inertia::render('Admin/Category/Edit', [
            'category' => $category
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'image' => ['required'],
        ])->validate();

        Category::find($id)->update($request->all());
        return redirect()->route('category.list');
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return redirect()->route('category.list')->with('success', 'Category deleted successfully!');
    }
}
