import React from 'react';

function Button(pros) {
    return React.createElement('button', null, pros.label);
}

export default Button;