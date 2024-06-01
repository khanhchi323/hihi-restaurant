<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Table;
use Illuminate\Http\Request;

class TableController extends Controller
{
    public function index()
    {
        $tables = Table::all(); // hoặc paginate() nếu bạn muốn phân trang

        return Inertia::render('Admin/Table/List', [
            'tables' => $tables
        ]);
    }
    public function edit()
    {
        return Inertia::render('Admin/Table/Edit');
    }

    public function create()
    {
        return Inertia::render('Admin/Table/Create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'number' => 'required|string|max:255|unique:areas,name',
        ]);

        $tables = new Table();
        $tables->number = $request->number;
        $tables->save();


        return redirect()->route('table.list')->with('success', 'Table created successfully!');
    }
}
