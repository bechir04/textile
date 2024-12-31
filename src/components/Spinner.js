//Spinner.js
import React from 'react';

function Spinner() {
    return (
        <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4"  style={{borderTopColor: '#3498db'}}
        ></div>
        </div>
     );
 }

 export default Spinner;