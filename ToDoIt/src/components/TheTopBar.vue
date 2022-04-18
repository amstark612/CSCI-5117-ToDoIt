<script>
import { auth, db } from "@/firebaseConfig";
import firebase from "firebase/app";
import BaseMenuItem from "./BaseMenuItem.vue";

export default {
    name: "TheTopBar",
    data() {
        return {
          categories: [],
          categoryKey: 0,
          newCategory: null,
          showInput: false,
          showOptions: false,
        };
    },
    components: {
      BaseMenuItem,
    },

    firestore() {
      if (auth.currentUser) {
        db.collection("categories").doc(auth.currentUser.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              this.categories = doc.data().categories.sort();
            } else {
              db.collection("categories").doc(auth.currentUser.uid)
              .set({ categories: [] })
              .then(() => { console.log("new user added"); })
              .catch(err => {
                console.log("error creating categories document for user", err);
              });
            }
        });
      }
    },

    methods: {
      back() {
          this.$router.go(-1);
      },

      addCategory() {
        db.collection("categories")
          .doc(auth.currentUser.uid)
          .update({
            categories: firebase.firestore.FieldValue.arrayUnion(this.newCategory.toLowerCase()),
        });

        this.categories.push(this.newCategory.toLowerCase());
        this.showInput = false;
        this.newCategory = null;
      },

      deleteCategory(category) {
        db.collection("categories")
          .doc(auth.currentUser.uid)
          .update({
            categories: firebase.firestore.FieldValue.arrayRemove(category.toLowerCase()),
        });

        this.categories = this.categories.filter((cat) => cat != category);
      },

      goToCategory(category) {
        this.showOptions = false;
        this.$router.push({
          name: "todos/:category",
          params: { category: category },
        }).then(() => {
          return;
        });
      },

      goToPage(route) {
        this.showOptions = false;
        this.$router.push({
          // CTN_TODO: more hack -_-
          name: route == "all" ? "todos" : route,
        });
      },

      toggleOptions() {
          this.showOptions = !this.showOptions;
      },

      signOut() {
        auth.signOut()
          .then(() => {
            this.user = null;
						this.$router.push("/");

          })
          .catch(err => console.log(err));
      },
    },
};
</script>

<template>
  <nav>
    <div class="quick-nav bottom-pad">
      <div>
        <a @click="back" class="nav-link">
          <span class="icon-text">
            <span class="icon"><i class="fas fa-angle-left" /></span>
            <span>Back</span>
          </span>
        </a>
      </div>
      <div>
        <span class="icon clickable nav-link" @click="toggleOptions">
          <i class="fas fa-ellipsis-h" />
        </span>
      </div>
    </div>

    <div v-if="showOptions" id="full-nav" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box center container">
          <div class="quick-nav">
            <div>
              <a class="muted" @click="signOut"><small class="upper">Log out</small></a>
            </div>
            <div class="right">
              <a class="muted" @click="toggleOptions"><small class="upper">Done</small></a>
            </div>
          </div>

          <div class="pb-2 heading">
            <span class="icon-text">
              <strong class="primary">Categories</strong>
              <span class="icon clickable ml-0" @click="showInput = !showInput">
                <small><i class="fas fa-plus" /></small>
              </span>
            </span>
          </div>

          <div v-if="showInput" id="new-category" class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                v-model.trim="newCategory"
                v-on:keyup.enter="addCategory"
              />
              <span class="icon clickable is-small is-left" @click="addCategory">
                <i class="fas fa-plus" />
              </span>
            </div>
          </div>

          <BaseMenuItem
            :category="'all'"
            @pick="goToPage"
          />

          <BaseMenuItem
            v-for="category in categories"
            :key="category"
            :category="category"
            @pick="goToCategory"
            @delete="deleteCategory"
          />

          <BaseMenuItem 
            :category="'done'" 
            @pick="goToPage"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

nav
  display: flex
  flex-direction: column

.quick-nav
  display: flex
  justify-content: space-between
  text-transform: uppercase

.nav-link, .nav-link:hover
  color: $light-olive

.heading
  font-size: 1em
</style>
