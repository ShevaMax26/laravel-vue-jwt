<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResource;
use App\Models\Fruits;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        $fruits = Fruits::all();

        return FruitResource::collection($fruits);
    }
}
