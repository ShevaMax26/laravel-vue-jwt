<?php

use App\Http\Controllers\User;
use App\Http\Controllers\Fruit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'users'], function () {
    Route::post('/', User\StoreController::class);
});

Route::group(['prefix' => 'fruits'], function () {
    Route::get('/', Fruit\IndexController::class);
});
