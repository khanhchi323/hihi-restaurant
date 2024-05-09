<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        return  Inertia::render('Admin/Menu/List', compact('menus'));
    }
public function create(){
    return Inertia::render('Admin/Menu/Create');
}

public function update(){
    return Inertia::render('Admin/Menu/Edit');
}


public function store(Request $request)
{
        $input = request()->except("_token");
        $image = $request->file('images');
        $storedPath = $image->move('images', $image->getClientOriginalName());
        $input["images"] = $storedPath;
        $product = Menu::create($input);
        return redirect()->route('menu.all')->with('success','Thêm sản phẩm thành công');
}

}