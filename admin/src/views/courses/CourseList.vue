<template>
  <div>
    <h2>课程列表</h2>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(field,name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width"
      ></el-table-column>
      <el-table-column label="操作" :width="200">
        <template v-slot="{row}">
          <el-button type="primary" @click="$router.push(`/courses/edit/${row._id}`)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue {
  data = {};
  fields = {
    _id: { label: "ID" },
    name: { label: "课程名称" },
    cover: { label: "课程封面" },
  };

  async fetch() {
    const res = await this.$http.get("courses");
    this.data = res.data;
  }

  created() {
    this.fetch();
  }
}
</script>