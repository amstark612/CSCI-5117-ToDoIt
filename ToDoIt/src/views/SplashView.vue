<script>
import { auth, provider } from "@/firebaseConfig";

export default {
  name: "SplashView",
  data() {
    return {
      user: null,
    }
  },
  
  beforeCreate() {
    auth.onAuthStateChanged(user =>  {
      this.user = user ? user : null;
      if (this.user) {
        this.$router.push("/todos");
      }
    });
  },
  methods: {
    signInWithGoogle() {
      auth.signInWithPopup(provider)
          .then(result => {
            this.user = result.user;
          })
          .catch(err => console.log(err));
    },
  },
};
</script>

<template>
  <main class="content center middle full-height">
    <div>
      <h1>ToDoIt!</h1>

      <div class="login">
        <button v-if="!user" class="button" @click="signInWithGoogle">Sign in with Google</button>
      </div>
    </div>
  </main>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

.avatar
  display: block

.middle
  display: flex
  justify-content: center
  align-items: center
</style>
