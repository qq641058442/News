;(function () {
    const template = `<!--体育栏目-->
    <div>
        <ul>
            <li v-for="(sport,index) in sportArr" :key="sport.id">
                <!--to中是js表达式，需要使用v-bind绑定即：to-->
                <router-link :to="'/news/sport/detail/'+sport.id">
                {{sport.title}}
                </router-link>
            </li>
        </ul>
        <!--渲染出sportdetail组件-->
    <router-view></router-view>
    </div> `
    window.Sport = {
        template,
        data () {
            return {
                sportArr:[]
            }
        },
        //异步获取数据
        created () {
            this.getSportArr()
        },
        methods:{
            getSportArr () {
                axios.get('http://127.0.0.1:5500/vue-08-router/02-boostrap-ajax-router/db/sport.json')
                .then(response =>{
                    console.log(response.data,this);
                    this.sportArr = response.data
                })
                .catch(error=>{
                    alert(error.messsage)
                })
            }
        }
    }
})()