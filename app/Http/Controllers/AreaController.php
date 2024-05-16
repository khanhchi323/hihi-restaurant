<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    
    public function index()
    {
        $areas = Area::all();
        return  Inertia::render('Admin/Area/List', compact('areas'));
    }
    public function create(){
        return Inertia::render('Admin/Area/Create');
    }

    public function edit(){
    return Inertia::render('Admin/Area/Edit');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:areas,name',
        ]);

        $area = Area::create($validatedData);

        return response()->json([
            'message' => 'Area created successfully!',
            'area' => $area,
        ]);
    }
    public function destroy(Request $request, $id)
    {
        $area = Area::find($id);
        $area->delete();
        return redirect()->route("area.list")->with("success", "Xóa sản phẩm thành công"); // Assuming 'menu.index' shows the list after deletion
    }
}
