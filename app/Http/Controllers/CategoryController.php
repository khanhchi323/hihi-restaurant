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


    // danh sach category
    // public function index()
    // {
    //     $categories['info'] = DB::table('categories')->get(); 
    //     return Inertia::render('Admin/Category/List', $categories);
    // }
    public function index()
    {
        $categories = Category::all(); // hoặc paginate() nếu bạn muốn phân trang

        // Thêm URL đầy đủ của hình ảnh vào từng đối tượng danh mục
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
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        // Initialize $imagePath to null
        $imagePath = null;
    
        // Check if the request has a file and store it
        if ($request->hasFile('image')) {
            // Store the file in the 'public' disk
            $imagePath = $request->file('image')->store('categories', 'public');
        }
    
        // Create a new category and save it to the database
        $category = new Category();
        $category->name = $request->name;
        $category->image = $imagePath; // chỉ lưu đường dẫn tương đối vào cơ sở dữ liệu
        $category->save();
    
        // Redirect to the category list with a success message
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
