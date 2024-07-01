<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();

        return Inertia::render('Public/Order', [
            'orders' => $orders
        ]);
    }
}
                