   import axios from "axios"
   // 获取可视区域高度
   function getWindowHeight() {
       return document.documentElement.clientHeight;
   }
   // 获取滚动高度
   function getScrollHeight() {
       return Math.max(
           document.documentElement.scrollTop,
           window.pageYOffset || 0
       );
   }
   // 文档高度
   function getDocumentHeight() {
       return document.documentElement.offsetHeight;
   }


   export const scrollBottom = (url, data) => {

   }