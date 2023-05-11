import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color , width , height }) => (
    <ReactLoading className='loading' type={type} color={color} height={width} width={height} />
);
 
export default Loading;