<?php

namespace App\Http\Controllers;

use App\Models\Menus;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{

    public function show($id)
    {
        $menuData = Menus::find($id)->first();
        $categories = Category::all();
        return view("menu/edit", compact('menuData', 'categories'));
    }

    public function index()
    {
        $menus = DB::table('menus') -> get() ;
        return Inertia::render('Admin/Menu/List', compact('menus'));
    }
    public function create()
    {
        return Inertia::render('Admin/Menu/Create');
    }
    public function edit()
    {
        return Inertia::render('Admin/Menu/Edit');
    }
    public function store(Request $request)
    { {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255|unique:menu,',
            ]);

            $menu = Menus::create($validatedData);
            return response()->json([
                'message' => 'Area created successfully!',
                'menu' => $menu,
            ]);
        }
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

            $menu = Menus::find($id);
            $menu->update($input);
            return redirect()->route("menu.update", $id)->with("success", "Cập nhật sản phẩm thành công");
        } catch (\Exception $e) {
            // Handle update error with a flash message or redirect to an error page
            return back()->withErrors(['update' => $e->getMessage()]);
        }
    }

    public function destroy(Request $request, $id)
    {
        $menu = Menus::find($id);
        $menu->delete();
        return redirect()->route("menu.list")->with("success", "Xóa sản phẩm thành công"); // Assuming 'menu.index' shows the list after deletion
    }
}
