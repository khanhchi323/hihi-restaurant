<?php

namespace App\Http\Controllers;

use App\Models\Table;
use App\Models\Area;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class TableController extends Controller
{
    public function index()
    {
        $tables = Table::all();
        
        return Inertia::render('Admin/Table/List', [
            'tables' => $tables,
        ]);
    }

    public function edit(Table $table)
    {
        if (!$table) {
            abort(404);
        }

        $areas = Area::all(); // Lấy danh sách các khu vực

        return Inertia::render('Admin/Table/Edit', [
            'table' => $table,
            'areas' => $areas,
        ]);
    }

    public function create()
    {
        $areas = Area::all(); // Lấy danh sách các khu vực
        
        return Inertia::render('Admin/Table/Create', [
            'areas' => $areas,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'table_name' => 'required|string|max:255',
            'area_id' => 'required|exists:areas,id', // Đảm bảo area_id hợp lệ
        ]);

        $table = Table::find($id);
        if (!$table) {
            return redirect()->route('table.list')->with('error', 'Bàn không tồn tại!');
        }

        $table->table_name = $request->table_name;
        $table->area_id = $request->area_id;
        $table->save();

        return redirect()->route('table.list')->with('success', 'Cập nhật bàn thành công!');
    }

    public function store(Request $request)
    {
        $request->validate([
            'table_name' => 'required|string|max:255',
            'area_id' => 'required|exists:areas,id', // Đảm bảo area_id hợp lệ
        ]);

        $table = new Table();
        $table->table_name = $request->table_name;
        $table->area_id = $request->area_id;
        $table->save();

        return redirect()->route('table.list')->with('success', 'Tạo bàn thành công!');
    }

    public function destroy($id): RedirectResponse
    {
        $table = Table::find($id);

        if (!$table) {
            return redirect()->route('table.list')->with('error', 'Bàn không tồn tại!');
        }

        $table->delete();
        return Redirect::route('table.list')->with('success', 'Xóa bàn thành công!');
    }
}
