<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('Web')->as('web.')->group(function () {
    Route::get('/', 'WebController@home')->name('home');
    Route::get('blog', 'WebController@blog')->name('blog');
    Route::get('contact', 'WebController@contact')->name('contact');
    Route::get('newsletter', 'WebController@newsletter')->name('newsletter');
});
