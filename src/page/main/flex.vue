<template>
<div>
  <el-row :gutter="20">
    <el-col :span="4">
      <el-button type="primary" @click="itemAmount++">添加</el-button>
    </el-col>
    <el-col :span="4">
      <el-select v-model="flexDirection" placeholder="请选择flex-direction">
        <el-option v-for="item in flexDirectionOptions" :key="item.value" :label="item.value" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-select v-model="flexWrap" placeholder="请选择flexWrap">
        <el-option v-for="item in flexWrapOptions" :key="item.value" :label="item.value" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-select v-model="justifyContent" placeholder="请选择justifyContent">
        <el-option v-for="item in justifyContentOptions" :key="item.value" :label="item.value" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-select v-model="alignItems" placeholder="请选择alignItems">
        <el-option v-for="item in alignItemsOptions" :key="item.value" :label="item.value" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-select v-model="alignContent" placeholder="请选择alignContent">
        <el-option v-for="item in alignContentOptions" :key="item.value" :label="item.value" :value="item.value">
        </el-option>
      </el-select>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">{{box}}</el-col>
    <el-col :span="18">
      <div :style="box">
        <div class="grid-content bg-purple" style="width:100px" v-for="itemObj in itemAmount">
          {{itemObj}}
        </div>
        <div class="grid-content bg-purple" style="height:50px;font-size:26px">
          50
        </div>
        <div class="grid-content bg-purple" style="height:150px;font-size:16px">
          150
        </div>
        <div class="grid-content bg-purple" style="height:250px;font-size:6px">
          250
        </div>
      </div>
    </el-col>

  </el-row>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      itemAmount: 1,
      flexDirection: 'row',
      flexDirectionOptions: [
        // row | row-reverse | column | column-reverse;
        {
          value: 'row',
        },
        {
          value: ' row-reverse',
        },
        {
          value: 'column',
        },
        {
          value: 'column-reverse',
        }
      ],
      flexWrap: 'nowrap',
      flexWrapOptions: [
        // nowrap | wrap | wrap-reverse;
        {
          value: 'nowrap',
        },
        {
          value: ' wrap',
        },
        {
          value: 'wrap-reverse',
        },

      ],
      justifyContent: 'flex-start',
      justifyContentOptions: [
        // justify-content: flex-start | flex-end | center | space-between | space-around;
        {
          value: 'flex-start',
        },
        {
          value: ' flex-end',
        },
        {
          value: 'center',
        },
        {
          value: 'space-between',
        },
        {
          value: ' space-around',
        },
      ],
      alignItems: 'flex-start',
      alignItemsOptions: [
        // 需要限定容器高度
        // align-items: flex-start | flex-end | center | baseline | stretch;
        {
          value: 'flex-start',
        },
        {
          value: ' flex-end',
        },
        {
          value: 'center',
        },
        {
          value: 'baseline',
        },
        {
          value: 'stretch',
        },
      ],
      alignContent: 'stretch',
      alignContentOptions: [
        // 容器需要有高度
        // align-content: flex-start | flex-end | center | space-between | space-around | stretch;
        {
          value: 'flex-start',
        },
        {
          value: ' flex-end',
        },
        {
          value: 'center',
        },
        {
          value: 'space-between',
        },
        {
          value: 'space-around',
        },
        {
          value: 'stretch',
        },
      ]
    }
  },
  computed: {
    box() {
      let styleObj = {
        display: ' -webkit-flex',
        display: 'flex',
        width: '500px',
        height:' 800px',
        backgroundColor:'grey'
      }
      if (this.flexDirection && this.flexDirection != '') {
        styleObj['flex-direction'] = this.flexDirection
      }

      if (this.flexWrap) {
        styleObj['flex-wrap'] = this.flexWrap
      }

      if (this.justifyContent) {
        styleObj['justify-content'] = this.justifyContent
      }
      if (this.alignItems) {
        styleObj['align-items'] = this.alignItems
      }
      if (this.alignContent) {
        styleObj['align-content'] = this.alignContent
      }

      return styleObj
      // return {
      //   'display': 'flex',
      //   'flex-direction': 'row',
      //   'width': '500px',
      //   'height':' 800px',
      //   'flex-wrap': 'wrap',
      //   'align-content': 'space-between'
      // }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple {
    background: #d3dce6;
}

.box {
    display: -webkit-flex;
    /* Safari */
    display: flex;
}


</style>
