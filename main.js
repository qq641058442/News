
;(function(){
  new Vue ({
    el:'#app',
    //Vue实例中的template选项中引用了组件后，会将这个组件渲染后的结果替换掉#app标签中的元素
    router,//引用路由配置
    template:'<app></app>',
    components:{
      App//等价于App:App
    }
  })
})()
