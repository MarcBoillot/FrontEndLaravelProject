<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Product extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'unit_price',
        'name',
        'description',
        'status',
        'color',
        'customizable',
        'is_active',
        'user_id'
    ];
    function categories(): BelongsToMany {
        return $this->belongsToMany(Category::class, 'category_id');
    }
    public function materials(): BelongsToMany {
        return $this->belongsToMany(Material::class,'material_id');
    }
}
