import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useStore } from '../store/useStore';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useStore();

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{Math.round(item.price*83)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-md"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};