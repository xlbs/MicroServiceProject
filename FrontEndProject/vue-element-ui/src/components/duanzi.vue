<template>
  <div class="hello">
    <h1>{{ temp }}</h1>
    <h2>hey girl</h2>
    <ul>
      <li v-for="item in arr">
        姓名：{{item.name}}
        性别：{{item.sex}}
        年龄：{{item.age}}
      </li>
     </ul>
    <div>
      <ul>
        <li>
          姓名：<input type="text" v-model="username">
        </li>
        <li>
          年龄：<input type="text" v-model="userage">
        </li>
        <li>
          性别：
          <select v-model="usersex">
            <option value="男" selected>男</option>
            <option value="女" >女</option>
          </select>
        </li>
      </ul>
    </div>
    <input type="button" value="增加" v-on:click="addStu">
  </div>
</template>

<script>
  export default {
    name: "duanzifffff",
    data() {
      return {
        temp: "我是duanzi页面",
        arr: [],
        username: '',
        userage: '',
        usersex: '男',
      }
    },
    //mounted函数指的页面一渲染首先执行的函数。 这里首先执行showlist函数
    mounted: function () {
      this.showList()
    },
    created: function(){

    },
    methods: {
      showList(){
        this.arr = [
          {name:'tom',age:18,sex:'male'},
          {name:'jerry',age:19,sex:'male'}
        ]
      },
      addStu(){
        this.arr.push({name:this.username,age:this.userage,sex:this.usersex})
      }
    }
  }
</script>

<style scoped>
  h1, h2{
    font-weight: normal;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    margin: 0 10px;
    /*margin-bottom: 10px;*/
  }
  a{
    color: #42b983;
  }

</style>
