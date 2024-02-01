<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

}
