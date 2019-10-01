import React from 'react';

const SpacedColumns = () => (
  <div className="px-2">
    <div className="flex -mx-2">
      <div className="w-1/3 px-2">
        <div className="text-center bg-gray-400 px-4 py-2">
          <p>Item 1</p>
        </div>
      </div>
      <div className="w-1/3 px-2">
        <div className="text-center bg-gray-400 px-4 py-2">
          <p>Item 2</p>
        </div>
      </div>
      <div className="w-1/3 px-2">
        <div className="text-center bg-gray-400 px-4 py-2">
          <p>Item 3</p>
        </div>
      </div>
    </div>
  </div>
);

export default SpacedColumns;
