<template>
  <div class="pa-3">
    <v-row>
      <v-col :md="8">
        <video width="100%" :src="episode.file" controls></video>
        <h3>{{ course.name }}</h3>
        <v-select
          v-model="currentIndex"
          :items="course.episodes.map((v, i) => ({ text: v.name, value: i }))"
        >
        </v-select>
      </v-col>
      <v-col :md="4">
        <comment-list type="Episode" :object="episode._id"></comment-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CommentList from '../../components/CommentList'

export default {
  components: { CommentList },
  async asyncData({ params, $axios }) {
    const { id } = params
    const course = await $axios.$get(`courses/${id}`, {
      params: {
        query: { populate: 'episodes' },
      },
    })
    return {
      id,
      course,
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  computed: {
    episode() {
      return this.course.episodes[this.currentIndex]
    },
  },
}
</script>
