;(function(){
    const template =`<div class="row placeholders">
    <div v-for="(hobby,index) in hobbies" :key="index" class="col-xs-6 col-sm-3 placeholder">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
      <h4>{{hobby}}</h4>
      <span class="text-muted">
      <a href="#" @click="deleteHobby(index)">删除</a>
      </span>
    </div>
  
  </div>`
    window.Dashboard = {
      //声明当前子组件接受符组件传递的参数
      props:['hobbies'],
      methods:{
        deleteHobby (index) {
          //删除点击的爱好
          //触发父组件delete_Hobby事件进行删除操作
          this.$emit('delete_Hobby',index)
        }
      },
        template//template:template
    }
})()