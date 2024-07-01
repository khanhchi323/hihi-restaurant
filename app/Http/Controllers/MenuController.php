<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();


        foreach ($menus as $menu) {
            $menu->image_url = Storage::url($menu->image);
        }

        return Inertia::render('Admin/Menu/List', [
            'menus' => $menus
        ]);
    }
    public function showall()
    {
        $menus = Menu::all();

        return Inertia::render('Admin/Menu', [
            'menus' => $menus
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Menu/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'menu_name' => 'required|string|max:255',
            'category_name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('menus', 'public');
        }

        $menu = new Menu();
        $menu->menu_name = $request->menu_name;
        $menu->category_name = $request->category_name;
        $menu->price = $request->price;
        $menu->image = $imagePath;
        $menu->save();      

        return redirect()->route('menu.list')->with('success', 'Menu created successfully!');
    }

    public function edit(Menu $menu)
    {
        if (!$menu) {
            abort(404);
        }
        return Inertia::render('Admin/Menu/Edit', [
            'menu' => $menu
        ]);
    }
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'menu_name' => ['required'],
            'category_name' => ['required'],
            'price' => ['required'],
            'image' => ['required'],
        ])->validate();

        if ($request->hasFile('image')) {

            // //xóa file ảnh cũ
            // $images=Store::select('select image from posts where id= :id', ['id' => $id]);
            // foreach ($images as $image) {
            //     File::delete(public_path(path_delete.$image->image));
            // }   
            //lấy tên file ảnh mới và upload lên serve
            $imagePath = $request->file('image')->store('menus', 'public');

            Category::find($id)->update([
                'menu_name' => $request->menu_name,
                'category_name' => $request->category_name,
                'price' => $request->price,
                'image' => $imagePath,
            ]);
        } else
            Menu::find($id)->update([
                'menu_name' => $request->menu_name,
                'category_name' => $request->category_name,
                'price' => $request->price,
            ]);
        return redirect()->route('menu.list');
    }

    public function destroy($id): RedirectResponse
    {
        Menu::find($id)->delete();
        return Redirect::route('menu.list');
    }
}
