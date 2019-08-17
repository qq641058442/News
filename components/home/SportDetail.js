;(function(){
    const template = `<!--详情-->
    <div class="jumbotron">
    <h1>{{id}}</h1>
        <h2>{{SportDetail.title}}</h2>
        <p>{{SportDetail.content}}</p>
    </div>`
    window.SportDetail = {
        template,
        data () {//data只会初始化1次
            return {
                id:null,
                SportDetail:{}
            }
        },
        created(){
            this.getRportByid()
        },
        methods:{
            getRportByid () {
                //获取路由地址中的id址
                this.id = this.$route.params.id-0
                //1.获取所有的体育新闻
                axios.get('http://127.0.0.1:5500/vue-08-router/02-boostrap-ajax-router/db/sport.json')
                .then(response =>{
                    console.log(response.data,this);
                    const sportArr = response.data
                    //2.获取id对应体育新闻
                    this.SportDetail = sportArr.find(detail=> {
                        return detail.id === this.id
                    })
                })
                .catch(error=>{
                    alert(error.messsage)
                })
                
            }
        },
        watch:{//watch是对象用来监听属性
            $route:function () {
            this.getRportByid()
            }
        }
    }
})()