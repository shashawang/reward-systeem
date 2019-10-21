<template>
  <div class="record">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "record",
  components: {},
  data() {
    return {
      value1: '',
    };
  },
  methods: {
  },
  created() {
  }
};
</script>

<style>
.setting {
  width: 60%;
  margin: 30px auto;
}
</style>
