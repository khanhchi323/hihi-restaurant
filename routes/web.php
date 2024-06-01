<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\AreaController;


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //CATEGORY
    Route::get('/Admin/Category/List', [CategoryController::class, 'index'])->name('category.list');
    Route::get('/Admin/Category/Create', [CategoryController::class, 'create'])->name('category.create');
    Route::get('/Admin/Category/Edit', [CategoryController::class, 'edit'])->name('category.edit');
    Route::post('/Category', [CategoryController::class, 'store'])->name('category.store');
    Route::put('/Category/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/Category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');
    Route::get('/Admin/Category/Show/{id}', [CategoryController::class, 'show'])->name('category.show');



    //MENU
    Route::get('/Admin/Menu/List', [MenuController::class, 'index'])->name('menu.list');
    Route::get('/Admin/Menu/Create', [MenuController::class, 'create'])->name('menu.create');
    Route::get('Admin/Menu/Edit', [MenuController::class, 'edit'])->name('menu.edit');
    Route::post('/Admin/Menu', [MenuController::class, 'store'])->name('menu.store');
    Route::delete('Admin/Menu/{id}', [MenuController::class, 'destroy'])->name('menu.destroy');

    //TABLE
    Route::get('/Admin/Table/List', [TableController::class, 'index'])->name('table.list');
    Route::get('/Admin/Table/Create', [TableController::class, 'create'])->name('table.create');
    Route::get('/Admin/Table/Edit', [TableController::class, 'edit'])->name('table.edit');
    Route::post('/Admin/Table', [TableController::class, 'store'])->name('table.store');
    Route::put('/Table/{id}', [TableController::class, 'update'])->name('table.update');
    Route::delete('Admin/Table/{id}', [TableController::class, 'destroy'])->name('table.destroy');

    //AREA
    Route::get('/Admin/Area/List', [AreaController::class, 'index'])->name('area.list');
    Route::get('/Admin/Area/Create', [AreaController::class, 'create'])->name('area.create');
    Route::get('/Admin/Area/Edit', [AreaController::class, 'edit'])->name('area.edit');
    Route::post('/Admin/Area', [AreaController::class, 'store'])->name('area.store');
    Route::put('/Area/{id}', [AreaController::class, 'update'])->name('area.update');
    Route::delete('/Area/{id}', [AreaController::class, 'destroy'])->name('area.destroy');
});

Route::get('/dbconn', function () {
    return view('dbconn');
});


// Route::get('/Admin/Menu/Create', [MenuController::class, 'create'])->name('menu.create');
require __DIR__ . '/auth.php';
