import React from "react";

const Test = () => {
  return (
    <div className="">
      <div class="border  border-gray-500 shadow rounded-md p-6 max-w-sm h-56 w-full ">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div>
              <div class="grid grid-cols-3 gap-6">
                <div class="h-2 bg-gray-500 rounded col-span-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div class="h-2 bg-gray-500 rounded col-span-1"></div>
                  <div class="h-2 bg-gray-500 rounded col-span-1"></div>
                </div>
              </div>
            </div>
            <div class="space-y-12">
              <div class="grid grid-cols-3 gap-4 mt-[50px]">
                <div class="h-2 bg-gray-500 rounded col-span-3"></div>
                <div class="h-2 bg-gray-500 rounded col-span-3"></div>
                <div class="h-2 bg-gray-500 rounded col-span-1"></div>
              </div>
              <div className="grid  grid-cols-3 gap-4">
                <div class="h-2 bg-gray-500 rounded"></div>
                <div class="h-2 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
