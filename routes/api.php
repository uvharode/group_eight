<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    //All secure URL's
    // Route::get("display", [UserController::class, 'displayLogin']);
    Route::get("display", [LoginController::class, 'display']);
});
Route::post("register", [loginController::class, 'register']);
Route::post("login", [loginController::class, 'login']);
