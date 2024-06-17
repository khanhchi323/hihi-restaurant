<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Table;
use App\Models\Area;
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
        Route::model('id', Table::class);
        Route::model('id', Area::class);
    }
}
