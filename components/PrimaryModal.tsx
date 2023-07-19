import React from 'react';

export default function PrimaryModal(props: any) {
  return (
    <div>
      <div className={`absolute ${props.display}`}>
        <div
          id="popup-modal"
          tabIndex={-1}
          className=" fixed inset-x-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-sm md:inset-0"
        >
          <div className="relative h-full w-full max-w-md p-4 md:h-auto">
            <div className="relative rounded-lg bg-white shadow-lg">
              <div className="p-6 text-center">
                <h3 className="m-5 text-lg font-bold">{props.text}</h3>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
