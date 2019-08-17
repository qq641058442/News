;(function(){
window.AppLeaf = {
    template:` <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!--router-link默认渲染出的是a标签
      如果需要他渲染出来的是别的标签，则需要tag属性指定渲染后的标签
      2可以在每个router-link上使用active-class来激活CSS类名
      或者在VueRouter实例中使用linkActiveClass全局配置CSS类名-->
      <router-link to="/" tag="li" exact>
      <a>首页</a>
      </router-link>
      <router-link to="/news" tag="li">
      <a>新闻管理</a>
      </router-link>
      <router-link to="/about" tag="li">
      <a>关于我们</a>
      </router-link>
    </ul>
  </div>`
}
})()