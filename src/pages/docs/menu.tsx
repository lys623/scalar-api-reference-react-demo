import React, { useEffect, useState } from 'react';
import { Anchor, Col, Row } from 'antd'
 // 创建防抖函数
 function debounce(func, delay) {
  var timer;
  return function() {
    clearTimeout(timer);
    var context = this;
    var args = arguments;
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

function Menu(){
  const [targetOffset, setTargetOffset] = useState<number>();
  const [anchorItems, setAnchorItems] = useState([]);
  useEffect(() => {
    setTargetOffset(60+20);
  }, []);
  useEffect(()=>{

    const contentWrap = document.getElementById('contentWrap');
    let navElements;
    // 动态生成菜单；
    const resetMenu=debounce(()=>{
      navElements=contentWrap.querySelectorAll('h1[id], section[id].section');
      const arr=[]
       navElements.forEach(function(h1Element) {
           var anchorId = h1Element.getAttribute('id');
           if(h1Element.tagName==='SECTION'){
            const aText=h1Element.querySelector('.section-header').innerText.split('#')[0];
            arr.push({
              key: anchorId,
              href: '#'+anchorId,
              title: aText,
            })
           }else{
            arr.push({
              key: anchorId,
              href: '#'+anchorId,
              title: h1Element.innerText,
            })
           }
      });
      setAnchorItems(arr);
    },300)
    const observer = new MutationObserver(function(mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          resetMenu()
        }
      }
    });
  const config = { childList: true, subtree: true };
  observer.observe(contentWrap, config)

  },[])
  return (
    <div>
      <div id="navbar"></div>
      <Anchor
            targetOffset={targetOffset}
            items={anchorItems}
          />
    </div>
  )
}


export default Menu
