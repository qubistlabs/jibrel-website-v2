<template>
    <div class='job-info' :class='onVacanciesList ? "-in-vacancies-list" : "-in-vacancy-page"'>
      <div class='time'>
        <svg class="icon" width="15px" height="15px"><use xlink:href="#i-clock"></use></svg>
        {{ time }}
      </div>
      <div class='place'>
        <svg class="icon" width="15px" height="15px"><use xlink:href="#i-pin"></use></svg>
        {{ place }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'JobInfo',
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