<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MenuController;
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
    Route::get('/Admin/Category/List', [CategoryController::class, 'index']) ->name('category.list'); 
    Route::get('/Admin/Category/Create', [CategoryController::class, 'create']) ->name('category.create'); 
    Route::get('/Admin/Category/Edit', [CategoryController::class, 'edit']) ->name('category.edit');     

    //MENU
    Route::get('/Admin/Menu/List', [MenuController::class, 'index']) ->name('menu.list'); 
    Route::get('/Admin/Menu/Create', [MenuController::class, 'create']) -> name('menu.create'); 
    Route::get('/Admin/Meni/Edit', [MenuController::class, 'edit']) ->name('menu.edit');     

});

Route::get('/dbconn', function(){
    return view('dbconn');
});


// Route::get('/Admin/Menu/Create', [MenuController::class, 'create'])->name('menu.create');
require __DIR__.'/auth.php';
