import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment: () => void = () => setCount(count + 1);
  const decrement: () => void = () => setCount(count - 1);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h1 className='text-2xl font-bold'>Counter</h1>
      <p className='text-lg'>Current Count: {count}</p>
      <div className='flex justify-center items-center gap-4 mt-4'>
        <button className='px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition duration-300' onClick={increment}>+</button>
        <button className='px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition duration-300' onClick={decrement}>-</button>
      </div>
    </div>
  )
}
