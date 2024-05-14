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
        $menuData = Menu::find($id)->first();
        $categories = Category::all();
        return view("menu/edit", compact('menuData', 'categories'));
    }

    public function index()
    {
        $menus = Menu::all();
        return Inertia::render('Admin/Menu/List', compact('menus'));
    }
    public function create(){
        return Inertia::render('Admin/Menu/Create');
    }
    public function update(Request $request, $id)
    {
        $input = $request->except("_token");

        try {
            if ($request->hasFile("images")) {
                $image = $request->file('images');
                $storedPath = $image->move('images', $image->getClientOriginalName());
                $input["images"] = $storedPath;
            }

            $menu = Menu::find($id);
            $menu->update($input);
            return redirect()->route("menu.update", $id)->with("success", "Cập nhật sản phẩm thành công");
        } catch (\Exception $e) {
            // Handle update error with a flash message or redirect to an error page
            return back()->withErrors(['update' => $e->getMessage()]);
        }
    }

    public function destroy(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->delete();
        return redirect()->route("menu.index")->with("success", "Xóa sản phẩm thành công"); // Assuming 'menu.index' shows the list after deletion
    }

    public function store(Request $request)
    {
        $input = request()->except("_token");

        try {
            $image = $request->file('images');
            $storedPath = $image->move('images', $image->getClientOriginalName());
            $input["images"] = $storedPath;

            $menu = Menu::create($input);
            return redirect()->route('menu.store')->with('success', 'Thêm sản phẩm thành công');
        } catch (\Exception $e) {
            // Handle create error with a flash message or redirect to an error page
            return back()->withErrors(['create' => $e->getMessage()]);
        }
    }
}
