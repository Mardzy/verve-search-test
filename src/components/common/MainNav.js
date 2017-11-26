import React from 'react';

const MainNav = ({info, handleClick}) => {
  // console.log('logging in main Nav', info);
  return (
    <div className="item-wrapper">
      <span
        onClick={() =>{
        // console.log(info.content);
          handleClick(info.content);
        }}
      >{info.label}</span>
      <ul className="child-list">
        {info.child && info.child.map(child=>{
          // console.log(child);
          return(
            <li key={child.key}>
              <MainNav
                handleClick={handleClick}
                info={child}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainNav;
