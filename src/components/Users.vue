<template>
  <h1>Users</h1>
  <button class="btn btn-primary" @click="fetchUsers()">
    Get Users
  </button>

  <div class="row">
    <div class="col-xs-6 col-md-3" v-for="user in users">
      <div class="thumbnail">
        <img :src="user.avatar_url" alt="{{ user.login }}">
        <div class="caption">
          <a :href="user.html_url">
            <h3 class="username">{{ user.login }}</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },

  methods: {
    fetchUsers() {
      this.$http.get('https://api.github.com/users', (data) => {
        this.users = data
      })
      .error((err) => console.log(err))
    }
  }
}
</script>

<style>
.username {
  text-align: center;
}
</style>