<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
    //faire une fonction pour faire les liens entre les tables
//     function order(): BelongsTo {
//         return $this->belongsTo(Order::class, 'order_id');
//     }
//     public function comments(): HasMany {
//         return $this->hasMany(Comment::class);
//     }
}
