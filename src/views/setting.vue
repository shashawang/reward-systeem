<template>
  <div class="setting">
    <h1>学习相关</h1>
    <div class="rewarditem" v-for="(item, index) in learnItems" :key="index">
      <el-checkbox-group v-model="chosedItem" @change="choose">
        <el-checkbox :label="item">
          <el-input v-model="item.project" :key="index"></el-input>
          {{'——'+item.reward+'块！'}}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- <h1>生活相关</h1>
    <div class="rewarditem" v-for="(item, index) in lifeItems" :key="index">
      <el-checkbox-group v-model="chosedItem">
        <el-checkbox>
          <el-input v-model="item.project"></el-input>
          {{'——'+item.reward+'块！'}}
        </el-checkbox>
      </el-checkbox-group>
    </div>-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="addItem" class="demo-form-inline">
        <el-form-item label="项目">
          <el-input v-model="addItem.project" placeholder="输入项目内容"></el-input>
        </el-form-item>
        <el-form-item label="奖励">
          <el-input-number v-model="addItem.reward" :step="10"></el-input-number>
        </el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form>
    </el-dialog>
    <el-button type="primary" @click="dialogVisible = true">新增</el-button>
    {{chosedItem}}
  </div>
</template>

<script>
export default {
  name: "setting",
  components: {},
  data() {
    return {
      dialogVisible: false,
      addItem: {},
      learnItems: [],
      lifeItems: [],
      chosedItem: []
    };
  },
  methods: {
    // 新增项目、展示项目（多选）、每周已选
    // 编辑内容没保存
    choose() {},
    save() {
      if (this.addItem.project !== "") {
        this.learnItems.push(this.addItem);
        // localStorage.setItem("addItem", JSON.stringify(this.addItem));
        localStorage.setItem("learnItems", JSON.stringify(this.learnItems));
      } else {
        this.$message.error("项目内容不能为空");
      }
      this.dialogVisible = false;
    },
    detail() {
      // this.learnItems = JSON.parse(localStorage.getItem("addItem")); removeItem
      this.learnItems = JSON.parse(localStorage.getItem("learnItems")) || [];
      const temp = [];
      this.learnItems.forEach(item => {
        if (item.project !== "") {
          temp.push(item);
        }
      });
      this.learnItems = temp;
      console.log("this.learnItems", this.learnItems);
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem("learnItems")) instanceof Array) {
      this.detail();
    }
  }
};
</script>

<style>
.setting {
  width: 60%;
  margin: 30px auto;
}
</style>
