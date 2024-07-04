<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    // Hiển thị danh sách đặt bàn
    public function index()
    {
        $reservations = Reservation::all();
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
            'reservation_date' => 'required|date',
            'reservation_time' => 'required',
            'number_of_guests' => 'required|integer',
            'table_id' => 'required|exists:tables,table_id',
        ]);

        Reservation::create($request->all());

        return redirect()->route('reservation.list')->with('success', 'Đặt bàn thành công.');
    }

    // Hiển thị form chỉnh sửa đặt bàn
    public function edit($id)
    {
        $reservation = Reservation::findOrFail($id);
        return Inertia::render('Admin/Reservation/Edit', [
            'reservation' => $reservation
        ]);
    }

    // Cập nhật thông tin đặt bàn
    public function update(Request $request, $id)
    {
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'reservation_date' => 'required|date',
            'reservation_time' => 'required',
            'number_of_guests' => 'required|integer',
            'id_table' => 'required|exists:tables,id_table',
        ]);

        $reservation = Reservation::findOrFail($id);
        $reservation->update($request->all());

        return redirect()->route('reservation.list')->with('success', 'Cập nhật đặt bàn thành công.');
    }

    // Xóa đặt bàn
    public function destroy($id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();

        return redirect()->route('reservation.list')->with('success', 'Xóa đặt bàn thành công.');
    }
}
