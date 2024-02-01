<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'order_status',
        'order_price',
        'order_date',
        'delivery_address',
        'facturation_address',
        'user_id'
    ];
     function user(): HasOne {
                         return $this->hasOne(User::class, 'user_id');
                     }
     function products(): HasMany {
                         return $this->hasMany(Product::class, 'product_id');
                     }
    function orderProduct(): BelongsTo {
        return $this->belongsTo(orderProduct::class);
    }

}
