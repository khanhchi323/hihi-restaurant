<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CategoryController extends Controller
{

    //tìm kiếm category theo id 
    public function show($id)
    {
        $category = Category::find(request("id"))->first();
        return view("category/edit",compact('category'));
    } 
    
    //danh sach category
    public function index()
    {
        $categories = Category::all();
        return  Inertia::render('Admin/Category/List', compact('categories'));
    }

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    public function store(Request $request) : RedirectResponse
    {
       
        Validator::make($request->all(), [
            'name' => ['required'],
            'image' => ['required'],
        ])->validate();
   
        Category::create($request->all());
    
        return redirect()->route('category.list');
    }


    public function edit(Category $post)
    {
        return Inertia::render('Admin/Category/Edit', [
            'post' => $post
        ]);
    }
    

    public function update(Request $request, $id)
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
        Category::find($id)->delete();;
        return redirect()->route("category.all")->with("success","Xóa sản phẩm thành công");
    }

    
    
    
}
