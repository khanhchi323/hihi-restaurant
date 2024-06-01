<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

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
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        
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

    // public function edit(Category $category)
    // {
    //     return Inertia::render('Admin/Category/Edit', [
    //         'category' => $category
    //     ]);
    // }
    public function edit(Category $category)
    {
        // Kiểm tra xem đối tượng Category đã tồn tại hay chưa
        if (!$category) {
            // Xử lý khi không tìm thấy đối tượng Category
            abort(404); // Hoặc bất kỳ xử lý nào phù hợp với ứng dụng của bạn
        }

        // Trả về template Inertia với đối tượng Category để hiển thị thông tin chỉnh sửa
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
