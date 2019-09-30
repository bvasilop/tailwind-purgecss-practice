import React from 'react';

const SpacedColumns = () => (
  <div className="px-2">
    <div className="flex -mx-2">
      <div className="w-1/3 px-2">
        <div className="text-center bg-gray-400 px-4 py-2">Item 1</div>
      </div>
      <div className="w-1/3 px-2">
        <div className="text-center bg-gray-400 px-4 py-2">Item 2</div>
      </div>
      <div className="w-1/3 px-2">
        <div className="text-center bg-gray-400 px-4 py-2">Item 3</div>
      </div>
    </div>
  </div>
);

export default SpacedColumns;
