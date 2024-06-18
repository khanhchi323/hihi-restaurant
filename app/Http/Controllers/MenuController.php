<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class MenuController extends Controller
{

    public function show($id)
    {
        $menu = Category::findOrFail($id);
        $categories = Category::all();
        return Inertia::render('Admin/Menu/Edit', compact('menu'));
    }

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
    public function create()
    {
        return Inertia::render('Admin/Menu/Create');
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('menus', 'public');
        }

        $menu = new Category();
        $menu->name = $request->name;
        $menu->category_id = $request->category_id;
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

    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);
        $menu->delete();
        return redirect()->route('menu.list')->with('success', 'Menu deleted successfully!');
    }
}
