<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Table;
use App\Models\Area;
use App\Models\Menu;
use App\Models\Reservation;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Route::model('cate', Category::class);
        Route::model('menu', Menu::class);
        Route::model('table', Table::class);
        Route::model('area', Area::class);
        Route::model('reservation', Reservation::class);
    }
}
