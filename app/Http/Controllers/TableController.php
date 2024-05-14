<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Table;
use Illuminate\Http\Request;

class TableController extends Controller
{
    public function index()
    {
        $tables = Table::all();
        return  Inertia::render('Admin/Table/List', compact('tables'));

    }
    public function edit(){
        return Inertia::render('Admin/Table/Edit');
    }

    public function create(){
        return Inertia::render('Admin/Table/Create');
}
public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:tables,name',
        ]);

        $tables = Table::create($validatedData);

        return response()->json([
            'message' => 'Table created successfully!',
            'table' => $table,
        ]);
    }
}

