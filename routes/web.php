<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\AreaController;
use Illuminate\Console\View\Components\Task;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
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
    // Route::resource('category', CategoryController::class);
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
    Route::get('Admin/Menu/Edit', [MenuController::class, 'edit'])->name('menu.edit');
    Route::post('/Admin/Menu', [MenuController::class, 'store'])->name('menu.store');
    Route::delete('Admin/Menu/{id}', [MenuController::class, 'destroy'])->name('menu.destroy');

    //TABLE

    Route::resource('table', TableController::class);
    Route::get('/Admin/Table/List', [TableController::class, 'index'])->name('table.list');
    Route::get('/Admin/Table/Create', [TableController::class, 'create'])->name('table.create');
    Route::get('/Admin/Table/Edit/{table}', [TableController::class, 'edit'])->name('table.edit');
    Route::post('/Table', [TableController::class, 'store'])->name('table.store');
    Route::put('/Table/{id}', [TableController::class, 'update'])->name('table.update');
    Route::delete('/Table/{id}', [TableController::class, 'destroy'])->name('table.destroy');
    Route::get('/Admin/Table/Show/{id}', [TableController::class, 'show'])->name('table.show');


    //AREA
    Route::resource('area', AreaController::class);
    Route::get('/Admin/Area/List', [AreaController::class, 'index'])->name('area.list');
    Route::get('/Admin/Area/Create', [AreaController::class, 'create'])->name('area.create');
    Route::get('/Admin/Area/Edit/{area}', [AreaController::class, 'edit'])->name('area.edit');
    Route::post('/Area', [AreaController::class, 'store'])->name('area.store');
    Route::put('/Area/{id}', [AreaController::class, 'update'])->name('area.update');
    Route::delete('/Area/{id}', [AreaController::class, 'destroy'])->name('area.destroy');
    Route::get('/Admin/Area/Show/{id}', [AreaController::class, 'show'])->name('area.show');
});

Route::get('/dbconn', function () {
    return view('dbconn');
});

Route::get('/Public/Menu', [CategoryController::class, 'index'])->name('menu');


// Route::get('/Admin/Menu/Create', [MenuController::class, 'create'])->name('menu.create');
require __DIR__ . '/auth.php';
