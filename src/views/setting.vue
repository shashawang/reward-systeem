<template>
  <div class="setting">
    <el-button type="primary" @click="dialogVisible = true">新增</el-button>
    <el-table
      ref="multipleTable"
      :data="rewardItems"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="project" label="项目" show-overflow-tooltip></el-table-column>
      <el-table-column prop="reward" label="奖励" width="120"></el-table-column>
      <el-table-column
        prop="type"
        label="标签"
        width="100"
        :filters="[{ text: '工作学习', value: 0 }, { text: '生活', value: 1 }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag v-if="!scope.row.type" type="primary" disable-transitions>工作学习</el-tag>
          <el-tag v-else type="success" disable-transitions>生活</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="saveWeekTarget">保存为本周目标</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form :model="addItem" class="demo-form-inline">
        <el-form-item label="项目">
          <el-input v-model="addItem.project" placeholder="输入项目内容"></el-input>
        </el-form-item>
        <el-form-item label="奖励">
          <el-input-number v-model="addItem.rewards" :step="10"></el-input-number>
        </el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form>
    </el-dialog>
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
      rewardItems: [],
      weekTarget: []
    };
  },
  methods: {
    // 新增项目、展示项目（多选）、每周已选
    // 编辑内容没保存
    handleSelectionChange(val) {
      this.weekTarget = val;
    },
    save() {
      if (this.addItem.project !== "") {
        this.learnItems.push(this.addItem);
      } else {
        this.$message.error("项目内容不能为空");
      }
      this.dialogVisible = false;
    },
    detail() {
      const temp = [];
      this.learnItems.forEach(item => {
        if (item.project !== "") {
          temp.push(item);
        }
      });
      this.learnItems = temp;
    },
    saveWeekTarget() {}
  },
  created() {
    // this.detail();
    this.rewardItems = [
      { project: "工作项目", rewards: 200, type: 0 },
      { project: "奖励系统", rewards: 500, type: 0 },
      { project: "冴羽深入js系列", rewards: 100, type: 0 },
      { project: "认真吃饭", rewards: 100, type: 1 },
      { project: "早睡", rewards: 100, type: 1 },
      { project: "保持运动", rewards: 100, type: 1 },
      { project: "画画", rewards: 100, type: 1 }
    ];
  }
};
</script>

<style>
.setting {
  width: 60%;
  margin: 30px auto;
}
</style>
