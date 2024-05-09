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
}
