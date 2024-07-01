<?php

namespace App\Http\Controllers;

use App\Models\ReserveTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReserveTableController extends Controller
{
    // Hiển thị danh sách đặt bàn
    public function index()
    {

        $reservations = ReserveTable::all();
        return Inertia::render('Admin/Reservation/List', [
            'reservations' => $reservations
        ]);
    }

    // Hiển thị form thêm đặt bàn
    public function create()
    {
        return Inertia::render('Admin/Reservation/Create');
    }

    // Lưu thông tin đặt bàn mới
    public function store(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'reservation_date' => 'required|date',
            'reservation_time' => 'required',
            'number_of_guests' => 'required|integer',
            'table_id' => 'required|exists:tables,table_id',
            'special_requests' => 'nullable|string',
            'assigned_staff' => 'required|string|max:255',
        ]);

        ReserveTable::create($request->all());

        return redirect()->route('reservations.index')->with('success', 'Đặt bàn thành công.');
    }
}
