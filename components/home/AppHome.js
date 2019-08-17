;(function(){
    const template = 
        `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        
        <!--右边上半区域-->
            <!--<h1 class="page-header">Dashboard</h1>-->
            <!--定义插槽-->
            <slot name="Dashboard"></slot>
            <!--通过属性绑定的方式向子组件传递数据
            @自定义事件名=时间监听函数
            在子组件dashboard中触发了delete_Hobby事件来调用deleteHobby函数
            -->
            <dashboard :hobbies="hobbies" @delete_Hobby="deleteHobby"></dashboard>
        <!--右边下半区域-->
            <h2 class="sub-header">Section title</h2>
            <!--绑定数据-->
           <home-list :empList="empList" :deleteEmp="deleteEmp"></home-list>
          </div>`
     
     window.AppHome = {
         template,//template = template
         data () {//声明数据
             return{
                 hobbies:['打游戏','睡觉','敲代码','听音乐'],
                 empList:[]
             }
         },
         created () {
             axios.get('http://127.0.0.1:5500/vue-08-router/02-boostrap-ajax-router/emp.json')
             .then(response=>{
                 console.log(response.data,this);
                 this.empList = response.data
             })
             .catch(error=>{
                 alert(rror.message);
             })
         },
         methods:{
             //删除某个name，因为删除emp会对emplist做更新操作，而这个emplist在当前组件中
             deleteEmp (index) {
            this.empList.splice(index,1)
             },
             deleteHobby (index) {
                 this.hobbies.splice(index,1)
             }
         },
         components:{//Dashboard作为AppHome的子组件
          Dashboard,//Dashboard:Dashboard
          HomeList//HomeList:HomeList
         }
     }
})()