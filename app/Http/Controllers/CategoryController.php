<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Admin/Category/Edit', compact('category'));
    }


    //danh sach category
    public function index()
{
    $categories['info'] = DB::table('categories')->paginate(4); // Số category hiển thị trên mỗi trang là 4
    return Inertia::render('Admin/Category/List', $categories);
}       

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
        }

        // Create a new category
        $category = new Category();
        $category->name = $request->name;
        $category->image = $imagePath;
        $category->save();

        // Redirect using Inertia
        return redirect()->route('category.list')->with('success', 'Category created successfully!');
    }

    public function edit(Category $category)
{
    return Inertia::render('Admin/Category/Edit', [
        'category' => $category
    ]);
}



    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $category = Category::findOrFail($id);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
            $category->image = $imagePath;
        }

        $category->name = $request->name;
        $category->save();

        return redirect()->route('category.list')->with('success', 'Category updated successfully!');
    }


    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->route('category.list')->with('success', 'Category deleted successfully!');
    }
}
