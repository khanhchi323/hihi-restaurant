<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

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
            // 'table_id' => 'required|exists:tables,table_id',
        ]);

        $reservation = new Reservation();
        $reservation->customer_name = $request->customer_name;
        $reservation->phone_number = $request->phone_number;
        $reservation->reservation_date = $request->reservation_date;
        $reservation->reservation_time = $request->reservation_time;
        $reservation->number_of_guests = $request->number_of_guests;
        // $reservation->table_id = $request->table_id;
        $reservation->save();

        return redirect()->route('reservation.list')->with('success', 'Đặt bàn thành công.');
    }

    public function edit(Reservation $reservation)
    {
        if (!$reservation) {
            abort(404);
        }
        return Inertia::render('Admin/Reservation/Edit', [
            'reservation' => $reservation
        ]);
    }

    // Cập nhật thông tin đặt bàn
    public function update(Request $request, $id)
    {
        Validator::make($request->all(), [
            'customer_name' => ['required'],
            'phone_number' => ['required'],
            'reservation_date' => ['required'],
            'reservation_time' => ['required'],
            'number_of_guests' => ['required'],
            // 'table_id' => ['required'],
        ])->validate();

        Reservation::find($id)->update([
            'customer_name' => $request->customer_name,
            'phone_number' => $request->phone_number,
            'reservation_date' => $request->reservation_date,
            'reservation_time' => $request->reservation_time,
            'number_of_guests' => $request->number_of_guests,
            // 'table_id' => $request->table_id,
        ]);

        return redirect()->route('reservation.list');
    }

    public function destroy($id): RedirectResponse
    {
        Reservation::find($id)->delete();
        return Redirect::route('reservation.list');
    }
}
