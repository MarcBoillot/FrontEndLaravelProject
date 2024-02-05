<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
//        $categories = Category::factory()->count(5)->create();
        Product::factory(50)->create()->each(function($product){
            $categories = Category::inRandomOrder()->first();
            $product->categories()->attach($categories);
        });
    }
}
