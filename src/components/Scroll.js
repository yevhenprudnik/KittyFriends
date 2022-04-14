import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '4px dashed rgb(225, 65, 145)', height: '800px'}}>
            {
                props.children
            }
        </div>
    );
};
export default Scroll;