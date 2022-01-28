import React from 'react';
import { Icon } from '@iconify/react';
import "./code-box.css";
function CodeBox() {
  return (
    <>
      <h1 className="in-title">Code Box</h1>
      <div className='code-box'>
        <div className='code-box-first-line'>
          <Icon icon="uiw:setting" /><div className='code-box-first-line-title'>CODE</div>
        </div>
      </div>
    </>);
}

export default CodeBox;
