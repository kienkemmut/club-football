<template>
  <div class="container-fluid">
    <div class="col-6">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="dataMail.email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" v-model="dataMail.userName">
        </div>
        <button type="submit" class="btn btn-primary" @click="submit()">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      dataMail: {
        email: '',
        userName: ''
      }
    }
  },
  computed: {
    isShowBtn: {
      get: function () {
        return this.$store.getters.isShowBtn
      }
    }
  },
  mounted: function () {
  },
  methods: {
    submit: function () {
      console.log(this.dataMail.email, this.dataMail.userName, 'ss')
    }
  }
}

</script>
