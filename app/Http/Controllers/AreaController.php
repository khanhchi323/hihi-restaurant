<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    // Phương thức trả về danh sách các Area
    public function index()
    {
        $areas = Area::all(); // hoặc paginate() nếu bạn muốn phân trang

        return Inertia::render('Admin/Area/List', [
            'areas' => $areas
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Area/Create');
    }


    public function edit($id)
{
    $area = Area::findOrFail($id);

    return Inertia::render('Admin/Area/Edit', [
        'area' => $area,
    ]);
}


    public function store(Request $request)
    {
        $request->validate([
            'area_name' => 'required|string|max:255',
        ]);

        $area = new Area();
        $area->area_name = $request->area_name;
        $area->save();


        return redirect()->route('area.list')->with('success', 'Area created successfully!');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'area_name' => 'required|string|max:255',
        ]);

        $area = Area::findOrFail($id);

        $area->area_name = $request->area_name;
        $area->save();

        return redirect()->route('area.list')->with('success', 'Area updated successfully!');
    }

    public function destroy($id)
    {
        $area = Area::findOrFail($id);
        $area->delete();
        return redirect()->route('area.list')->with('success', 'Area deleted successfully!');
    }
}
