;(function(){
    const template = ` <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>工资</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!--遍历数据-->
         <Item v-for="(emp,index) in empList" :key="emp.id" :emp="emp" :deleteEmp="deleteEmp" :index="index"/>
        
      </tbody>
    </table>
  </div>`
  window.HomeList = {
     //声明当前子组件接受符组件传递的参数
    props:{
      empList:Array,//数组
      deleteEmp:Function,//函数
    },
      template,//template:template
      components:{
        Item
      }
  }
})()