import React from 'react';

const YAMLBar = ({client, year, role}) => {
    return (
      <div
        className="
        w-full
       grid grid-cols-2
       lg:grid-cols-5 gap-[1.31rem] 
        text-cap 
        mb-4
        lg:mb-0"
      >
        {/* gap-[1.31rem]!! */}
        <div className="pl-1 lg:flex lg:gap-1">
          <div className="font-CMUSerif">Client </div>
          <div className="font-Helvetica-Neue font-bold">{client}</div>
        </div>
        <div className="lg:justify-self-end lg:flex lg:gap-1">
          <div className="font-CMUSerif">Year </div>
          <div className="font-Helvetica-Neue font-bold">{year}</div>
        </div>
        <div className="pl-1 col-start-1 col-span-2 lg:col-start-3 lg:flex lg:gap-1">
          <div className="font-CMUSerif">Role </div>
          <div className="font-Helvetica-Neue font-bold">
            {role}
          </div>
        </div>
      </div>
    );
};

export default YAMLBar;