<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reserve_tables', function (Blueprint $table) {
            $table->id('reservation_id');
            $table->string('customer_name');
            $table->string('phone_number');
            $table->string('email');
            $table->date('reservation_date');
            $table->time('reservation_time');
            $table->integer('number_of_guests');
            $table->unsignedBigInteger('table_id');
            $table->text('special_requests')->nullable();
            $table->string('assigned_staff');
            $table->foreign('table_id')->references('id')->on('tables');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserve_tables');
    }
};
