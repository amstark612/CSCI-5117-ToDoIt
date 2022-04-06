<script>
import { auth, provider } from "@/firebaseConfig";
import { onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";

export default {
  name: "SplashView",
  data() {
    return {
      user: null,
    }
  },
  
  beforeCreate() {
    onAuthStateChanged(auth, user => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    signInWithGoogle() {
      signInWithRedirect(auth, provider)
        .then(result => {
          this.user = result.user;
        })
        .catch(err => console.log(err));
    },
    signOut() {
      signOut(auth)
        .then(() => {
          this.user = null;
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
        <div v-else>
          <img class="avatar p-4" :src="user.photoURL" alt="avatar" referrerpolicy="no-referrer">
          <!-- google is real paranoid about hotlinking images I guess the referrerpolicy seems to fix it
            https://stackoverflow.com/questions/40570117/http403-forbidden-error-when-trying-to-load-img-src-with-google-profile-pic -->
          <button class="button" @click="signOut">Sign out</button>
        </div>
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
