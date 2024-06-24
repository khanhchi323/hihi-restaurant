<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class CategoryController extends Controller
{
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
            'category_name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
        }

        $category = new Category();
        $category->category_name = $request->category_name;
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
            'category_name' => ['required'],
            'image' => ['required'],
        ])->validate();

        if ($request->hasFile('image')) {

            // //xóa file ảnh cũ
            // $images=Store::select('select image from posts where id= :id', ['id' => $id]);
            // foreach ($images as $image) {
            //     File::delete(public_path(path_delete.$image->image));
            // }   
            //lấy tên file ảnh mới và upload lên serve
            $imagePath = $request->file('image')->store('categories', 'public');

            Category::find($id)->update([
                'category_name' => $request->category_name,
                'image' => $imagePath,
            ]);
        } else
            Category::find($id)->update([
                'category_name' => $request->category_name,
            ]);
        return redirect()->route('category.list');
    }

    // public function destroy($id)
    // {
    //     $category = Category::findOrFail($id);
    //     $category->delete();
    //     return redirect()->route('category.list')->with('success', 'Category deleted successfully!');
    // }
    public function destroy($id): RedirectResponse
    {

        // $images=DB::select('select image from posts where id= :id', ['id' => $id]);
        // foreach ($images as $image) {
        //     File::delete(public_path(path_delete.$image->image));
        // }   
        Category::find($id)->delete();
        return Redirect::route('category.list');
    }
}
