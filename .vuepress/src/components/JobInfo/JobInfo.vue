<template>
    <div class='job-info' :class='onVacanciesList ? "-in-vacancies-list" : "-in-vacancy-page"'>
      <div class='time'>
        <SpriteIcon name='i-clock' class='icon -stroke'/>
        {{ time }}
      </div>
      <div class='place'>
        <SpriteIcon name='i-pin' class='icon'/>
        {{ place }}
      </div>
    </div>
</template>

<script>
import SpriteIcon from '@/components/base/SpriteIcon/SpriteIcon.vue'
export default {
  name: 'JobInfo',
  components: {
    SpriteIcon
  },
  props: {
    time: String,
    place: String,
    onVacanciesList: false
  },
  
}
</script>


<style lang="scss">
  @import './jobInfo.scss';
</style>