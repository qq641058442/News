;(function(){
    const template = ` <div class="jumbotron">
    <h2>{{techDetail.title}}</h2>
    <p>{{techDetail.content}}</p>
</div>`
window.TechDetail = {
    template,
    data () {//data只会初始化1次
        return {
            id:null,
            techDetail:{}
        }
    },
    created(){
        this.getTechByid()
    },
    methods:{
        getTechByid () {
            //获取路由地址中的id址
            this.id = this.$route.params.id-0
            //1.获取所有的体育新闻
            axios.get('http://127.0.0.1:5500/vue-08-router/02-boostrap-ajax-router/db/tech.json')
            .then(response =>{
                 console.log(response.data,this);
                const techArr = response.data
                //2.获取id对应体育新闻
                this.techDetail = techArr.find(detail=> {
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
        this.getTechByid()
        }
    }
}
})()