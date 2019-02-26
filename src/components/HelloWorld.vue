<template>
  <div>
    <div class="hello">
      <button type="button" class="btn btn-primary" v-on:click="login()">yes</button>
    </div>
    <ul>
      <li v-for="value in listData" :key="value.id">
        {{ value.name }}
      </li>
    </ul>
    <!-- <Test v-if="!isShowBtn"></Test> -->
    <div class="container">
      <full-calendar :events="events" :config="config"></full-calendar>
    </div>
  </div>
</template>

<script>
import Test from './Test.vue'
import { FullCalendar } from 'vue-full-calendar'
// import $ from 'jquery'

export default {
  components: {
    FullCalendar,
    Test
  },
  data: function () {
    return {
      events: [
        {
          'title': 'event1',
          'start': '2018-12-12'
        },
        {
          'title': 'event2',
          'start': '2018-12-15',
          'end': '2018-12-17'
        },
        {
          'title': 'event3',
          'start': '2010-01-09T12:30:00',
          'allDay': false
        }
      ],
      config: {
        header: {
          left: 'title',
          center: 'today',
          right: 'prev next'
        },
        defaultView: 'month',
        views: {
          month: { // name of view
            titleFormat: 'YYYY/MM'
            // other view-specific options here
          }
        }
        // themeSystem: 'bootstrap3'
        // fixedWeekCount: true
        // buttonText: {
        //   prev: 'title'
        // }
      }
    }
  },
  computed: {
    isShowBtn: {
      get: function () {
        return this.$store.getters.isShowBtn
      }
    },
    listData: {
      get: function () {
        return this.$store.getters.listData
      }
    }
  },
  created: function () {
    // this.$store.dispatch('getData')
  },
  mounted: function () {
  },
  methods: {
    login: function () {
      this.$store.dispatch('getData')
      console.log(this.listData, '1111')
    }
  }
}

</script>
