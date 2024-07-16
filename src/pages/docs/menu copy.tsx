import React, { useEffect, useState } from 'react';

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

  useEffect(()=>{

    const contentWrap = document.getElementById('contentWrap');
    const navbarWrap = document.getElementById("navbar");
    let navElements;
    // 动态生成菜单；
    const resetMenu=debounce(()=>{
      // const h1Elements=contentWrap.querySelectorAll('h1[id]')
      navElements=contentWrap.querySelectorAll('h1[id], section[id].section');
      var anchorHTML = '';
      // 获取所有的 h1 标签
      navElements.forEach(function(h1Element) {
           var anchorId = h1Element.getAttribute('id');
           if(h1Element.tagName==='SECTION'){
            const aText=h1Element.querySelector('.section-header').innerText.split('#')[0];
            var anchorLinkHTML = '<div><a href="#' + anchorId + '">'+aText+'</a></div>';
            anchorHTML += anchorLinkHTML;
           }else{
            var anchorLinkHTML = '<div ><a href="#' + anchorId + '">'+h1Element.innerText+'</a></div>';
            anchorHTML += anchorLinkHTML;
           }

      });
      navbarWrap.innerHTML=anchorHTML
    },300)
    const observer = new MutationObserver(function(mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          resetMenu()
        }
      }
    });
  const config = { childList: true, subtree: true };
  // 开始观察 #contentWrap 的变化
  observer.observe(contentWrap, config)


  // 按钮点击
  navbarWrap.addEventListener('click', function(event) {
    const currentHash=event.target.getAttribute('href')
    if (event.target.tagName === 'A' && currentHash.startsWith('#')) {
      event.preventDefault();

      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
        history.replaceState(null, null, currentHash);
        window.scrollTo({
          top: targetOffset - 70,
          behavior: 'auto'
          // behavior: 'smooth'
        });
      }
    }
  });

  // 滚动高亮；
  window.addEventListener('scroll', () => {
    if(!navElements)return;
    let current = '';
    // 遍历所有目标模块，确定当前视口中的模块
    navElements.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = '#' + section.getAttribute('id');
      }
    });
    if (current !== window.location.hash) {
      console.log('update---',current)
      // history.replaceState(null, null, current); // 更新URL的#值
      // updateMenuState(current);
    }
  });
  },[])
  return (
    <div>
      <div id="navbar"></div>
    </div>
  )
}


export default Menu
