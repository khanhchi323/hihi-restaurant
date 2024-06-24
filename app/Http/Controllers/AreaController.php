<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Area;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class AreaController extends Controller
{
    public function index()
    {
        $areas = Area::all();

        return Inertia::render('Admin/Area/List', [
            'areas' => $areas
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Area/Create');
    }

    public function edit(Area $area)
    {
        if (!$area) {
            abort(404);
        }
        return Inertia::render('Admin/Area/Edit', [
            'area' => $area
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
        $area = Area::find($id);
        if (!$area) {
            return redirect()->route('area.list')->with('error', 'Area not found!');
        }

        $area->area_name = $request->area_name;
        $area->save();

        return redirect()->route('area.list')->with('success', 'Area updated successfully!');
    }


    public function destroy($id): RedirectResponse
    {
        Area::find($id)->delete();
        return Redirect::route('area.list');
    }
}
