<template>
<div>
  <button type="button" @click="positionFlag=!positionFlag" value="">布局div开关</button>
  <button type="button" @click="judge(condition)" value="">test</button>
  <!-- <input type="text" v-model="" /> -->
  <div v-show="positionFlag">
    <h1>垂直居中</h1>
    <div style="height:40px;line-height:40px;text-align:center;width:180px;background-color:#999">
      行高垂直居中
    </div>
    <div class="absalution" style="">
      <div style="">
        绝对定位
      </div>
    </div>
    <br/>

    <div class="disTable">
      <div>
        subTEXT
      </div>
    </div>
    <br/>
    <div class="mainContent" style="  text-align: center">
      <p class="testText">
        123
      </p>
      <div class="testText">
        456
      </div>
    </div>
    <div class="mainContent" style="  text-align: center">
      <p class="testText">
        123
      </p>
      <div class="testText">
        456
      </div>
    </div>
    <div class="container">
      <p>Sibling 1</p>
      <p>Sibling 2</p>
    </div>
  </div>

</div>
</template>

<script>
let test1 = function() {
  function Cat(skin1) {
    let skin = ''
    this.skin = skin1 || ' = ';
    this.say = function() {
      return 'miao miao'
    };
    this.changeSkin = function(abc) {
      this.skin = abc
    };
    this.getSkin = function() {
      return this.skin
    }
  }

  let mike = new Cat()
  console.log("1", mike)
  console.log(mike.getSkin())
  console.log(mike.say())
  mike.changeSkin('blue')
  console.log("2", mike)
  let mike1 = new Cat("red")
  console.log("3", mike1.skin)

  console.log("4", mike.changeSkin === mike1.changeSkin)

}
let test2 = function() {
  function Person(name, age) {
    let o = new Object()
    let Name = name
    o.sayAge = function() {
      console.log("myAge is : ", age)
    }
    return o
  }
  let temp = Person("liushizhu", 23)
  temp.sayAge()
  console.log(typeof temp, temp instanceof Person)
}

function test3() {
  function superType() {
    this.type = "super"
  }
  superType.prototype.getSuperType = function() {
    return this.type;
  }
  function subType() {
    this.type1 = "sub"
  }
//先继承后覆盖
  subType.prototype=new superType()
  // 使用字面量赋值 会覆盖prototype
  // subType.prototype={
  //   getSubType:function(){
  //
  //   }
  // }
  subType.prototype.getSubType = function() {
    return this.type1;
  }
//覆盖父类方法
  subType.prototype.getSuperType = function() {
    return "覆盖方法";
  }

  let temp = new subType()
  console.log(temp.getSuperType())
  console.log(temp.getSubType())

}

// test1()
// test2()
// test3()
export default {
  name: 'hello',
  data() {
    return {
      positionFlag: false,
      condition: ['1', 2, 3]
    }
  },
  methods: {
    judge() {
      console.log(arguments)
      // for(){
      //   if(){
      //     return ;
      //   }
      // }
    },
    proFun() {
      return function() {

      }
    }
  }
}
</script>

<style scoped lang='less'>
.mainContent {
    width: 350px;
    height: 350px;
    display: inline-block;
    background-color: #999;
}
.testText {
    color: green;
}

.absalution {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    position: relative;
    div {
        position: absolute;
        border: 1px solid red;
        top: 50%;
        right: 50%;
        transform: translateY(-50%);
        //white-space:nowrap;//不换行
    }
}

.disTable {
    display: table;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    text-align: center;
    div {
        border: 1px solid red;
        display: table-cell;
        vertical-align: middle;
        // margin: 0 auto;
    }
}
.container {
    background-color: red;
    overflow: hidden;

    /* creates a block formatting context */
    p {

        background-color: lightgreen;
        margin: 10px 0;
    }
}
</style>
