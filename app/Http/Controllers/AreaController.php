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

    // Phương thức trả về trang tạo mới Area
    public function create()
    {
        return Inertia::render('Admin/Area/Create');
    }

    // Phương thức trả về trang chỉnh sửa Area
    public function edit($id)
    {
        $area = Area::find($id);

        if (!$area) {
            return redirect()->route('area.list')->with('error', 'Area not found.');
        }

        return Inertia::render('Admin/Area/Edit', [
            'area' => $area
        ]);
    }


    // Phương thức lưu trữ Area mới
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:areas,name',
        ]);

        $area = new Area();
        $area->name = $request->name;
        $area->save();


        return redirect()->route('area.list')->with('success', 'Area created successfully!');
    }

    // Phương thức cập nhật Area
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $area = Area::findOrFail($id);

        $area->name = $request->name;
        $area->save();

        return redirect()->route('area.list')->with('success', 'Area updated successfully!');
    }

    // Phương thức xóa Area
    public function destroy($id)
    {
        $area = Area::findOrFail($id);
        $area->delete();

        return redirect()->route('area.list')->with('success', 'Area deleted successfully!');
    }
}
