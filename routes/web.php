<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReserveTableController;
use App\Models\Menu;
use Illuminate\Console\View\Components\Task;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage');
});

Route::get('/Menu', function () {
    return Inertia::render('PublicLayout');
});

Route::get('/Admin/Menu', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //CATEGORY
    Route::get('/Admin/Category/List', [CategoryController::class, 'index'])->name('category.list');
    Route::get('/Admin/Category/Create', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/Admin/Category/Create', [CategoryController::class, 'store'])->name('category.store');
    Route::get('/Admin/Category/Edit/{cate}', [CategoryController::class, 'edit'])->name('category.edit');
    Route::post('/Admin/Category/Edit/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/Admin/Category/List{id}', [CategoryController::class, 'destroy'])->name('category.destroy');
    Route::get('/Admin/Category/Show/{id}', [CategoryController::class, 'show'])->name('category.show');

    //MENU
    Route::get('/Admin/Menu/List', [MenuController::class, 'index'])->name('menu.list');
    Route::get('/Admin/Menu/Create', [MenuController::class, 'create'])->name('menu.create');
    Route::post('/Admin/Menu/Create', [MenuController::class, 'store'])->name('menu.store');
    Route::get('/Admin/Menu/Edit/{menu}', [MenuController::class, 'edit'])->name('menu.edit');
    Route::post('/Admin/Menu/Edit/{id}', [MenuController::class, 'update'])->name('menu.update');
    Route::delete('/Admin/Menu/List{id}', [MenuController::class, 'destroy'])->name('menu.destroy');
    Route::get('/Admin/Menu/Show/{id}', [MenuController::class, 'show'])->name('menu.show');

    //TABLE
    Route::get('/Admin/Table/List', [TableController::class, 'index'])->name('table.list');
    Route::get('/Admin/Table/Create', [TableController::class, 'create'])->name('table.create');
    Route::post('/Admin/Table/Create', [TableController::class, 'store'])->name('table.store');
    Route::get('/Admin/Table/Edit/{table}', [TableController::class, 'edit'])->name('table.edit');
    Route::post('/Admin/Table/Edit/{id}', [TableController::class, 'update'])->name('table.update');
    Route::delete('/Admin/Table/List{id}', [TableController::class, 'destroy'])->name('table.destroy');
    Route::get('/Admin/Table/Show/{id}', [TableController::class, 'show'])->name('table.show');


    //AREA
    Route::get('/Admin/Area/List', [AreaController::class, 'index'])->name('area.list');
    Route::get('/Admin/Area/Create', [AreaController::class, 'create'])->name('area.create');
    Route::post('/Admin/Area/Create', [AreaController::class, 'store'])->name('area.store');
    Route::get('/Admin/Area/Edit/{area}', [AreaController::class, 'edit'])->name('area.edit');
    Route::post('/Admin/Area/Edit/{id}', [AreaController::class, 'update'])->name('area.update');
    Route::delete('/Admin/Area/List{id}', [AreaController::class, 'destroy'])->name('area.destroy');
    Route::get('/Admin/Area/Show/{id}', [AreaController::class, 'show'])->name('area.show');

    //Reservation
    Route::get('/Admin/Reservation/List', [ReserveTableController::class, 'index'])->name('reservation.list');
    Route::get('/Admin/Reservation/Create', [ReserveTableController::class, 'create'])->name('reservation.create');
    Route::post('/Admin/Reservation/Create', [ReserveTableController::class, 'store'])->name('reservation.store');
    Route::get('/Admin/Reservation/Edit/{id}', [ReserveTableController::class, 'edit'])->name('reservation.edit');
    Route::put('/Admin/Reservation/Edit/{id}', [ReserveTableController::class, 'update'])->name('reservation.update');
    Route::get('/Admin/Area/Show/{id}', [AreaController::class, 'show'])->name('area.show');
    Route::get('/Admin/Reservation/Show{id}', [ReserveTableController::class, 'show'])->name('reservation.show');
});
Route::get('/dbconn', function () {
    return view('dbconn');
});

Route::get('/123', function () {
    return Inertia::render('Menu');
});

require __DIR__ . '/auth.php';
