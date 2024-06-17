<?php

namespace App\Http\Controllers;

use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class TableController extends Controller
{
    public function index()
    {
        $tables = Table::all(); // hoặc paginate() nếu bạn muốn phân trang

        return Inertia::render('Admin/Table/List', [
            'tables' => $tables
        ]);
    }
    public function edit(Table $table)
    {
        if (!$table) {
            abort(404);
        }
        return Inertia::render('Admin/Table/Edit', [
            'table' => $table
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Table/Create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'table_name' => 'required|string|max:255',
            'area_name' => 'required|string|max:255',
        ]);

        $table = new Table();
        $table->table_name = $request->table_name;
        $table->area_name = $request->area_name;
        $table->save();

        return redirect()->route('table.list')->with('success', 'Table created successfully!');
    }
    public function destroy($id)
    {
        $table = Table::findOrFail($id);
        $table->delete();
        return redirect()->route('table.list')->with('success', 'Table deleted successfully!');
    }
}
