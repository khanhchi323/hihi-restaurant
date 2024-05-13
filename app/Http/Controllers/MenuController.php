<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use App\Models\Category;

use Inertia\Inertia;

class MenuController extends Controller
{

    public function show($id)
    {
        $menu = Menu::find(request("id"))->first();
        $categories = Category::all();
        //var_dump("", $product);
        return view("menu/edit",compact('menus','categories'));
    }

    public function index()
    {
        $menus = Menu::all();
        return  Inertia::render('Admin/Menu/List', compact('menus'));
    }

    public function allTest()
    {
       
        return  Inertia::render('Admin/Menu/Test');
    } 



    public function update(Request $request, $id)
    {
        $input = $request->except("_token");
        if ( $request->hasFile("images")) {
            $image = $request->file('images');
            $storedPath = $image->move('images', $image->getClientOriginalName());
        $input["images"] = $storedPath;
        }
        $menu = Menu::find($id);
        $menu->update($input);
        return redirect()->route("menu.update", $id)->with("success","Cập nhật sản phẩm thành công");
    }

    public function destroy(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->delete();
        return redirect()->route("menu.all")->with("success","Xóa sản phẩm thành công");
    }

    public function store(Request $request)
    {
            $input = request()->except("_token");
            $image = $request->file('images');
            $storedPath = $image->move('images', $image->getClientOriginalName());
            $input["images"] = $storedPath;
            $menu = Menu::create($input);
            return redirect()->route('menu.all')->with('success','Thêm sản phẩm thành công');
    }

}