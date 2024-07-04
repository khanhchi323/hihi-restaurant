<?php

namespace App\Http\Controllers;

use App\Models\Table;
use App\Models\Area;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class TableController extends Controller
{
    public function index()
    {
        $tables = Table::all(); 
        $areas = Area::all();

        return Inertia::render('Admin/Table/List', [
            'tables' => $tables,
            'areas' => $areas
            
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
        $areas = Area::all('id', 'area_name');
        return Inertia::render('Admin/Table/Create');
    }

   // Controller Update
public function update(Request $request, $id)
{
    $request->validate([
        'table_name' => 'required|string|max:255',
        'area_id' => 'required|exists:areas,id', // Đảm bảo area_id hợp lệ
    ]);

    $table = Table::find($id);

    if (!$table) {
        return redirect()->route('table.list')->with('error', 'Table not found!');
    }

    $table->table_name = $request->table_name;
    $table->area_id = $request->area_id;

    $area = Area::find($request->area_id);

    if (!$area) {
        return redirect()->route('table.list')->with('error', 'Area not found!');
    }

    $table->area_name = $area->area_name;

    $table->save();

    return redirect()->route('table.list')->with('success', 'Table updated successfully!');
}

// Controller Store
public function store(Request $request)
{
    $request->validate([
        'table_name' => 'required|string|max:255',
        'area_id' => 'required|exists:areas,id', // Đảm bảo area_id hợp lệ
    ]);

    $area = Area::find($request->area_id);

    if (!$area) {
        return redirect()->route('table.list')->with('error', 'Area not found!');
    }

    $table = new Table();
    $table->table_name = $request->table_name;
    $table->area_id = $request->area_id;
    $table->area_name = $area->area_name;
    $table->save();

    return redirect()->route('table.list')->with('success', 'Table created successfully!');
}

    public function destroy($id): RedirectResponse
    {   
        Table::find($id)->delete();
        return Redirect::route('table.list');
    }
}
