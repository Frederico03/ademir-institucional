<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
})->name('home');

Route::get('/produtos/{segment}', function ($segment) {
    // Validate segment or just pass it and let Vue handle it
    return Inertia::render('Products', [
        'segment' => $segment
    ]);
})->name('products.segment');

Route::get('/produto/{id}', function ($id) {
    return Inertia::render('ProductDetails', [
        'id' => $id
    ]);
})->name('product.details');
