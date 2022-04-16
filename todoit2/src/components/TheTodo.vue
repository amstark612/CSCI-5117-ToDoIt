<script>
import { auth, db } from "@/main";
import firebase from "firebase/app";
import BaseMenuItem from "./BaseMenuItem.vue";

export default {
  name: "TheTodo",
  data() {
    return {
      categories: [],
      firestoreDocId: null,
      editMode: false,
      showCategories: false,
      todo: null,
    }
  },
  props: {
    id: String,
  },
  components: {
    BaseMenuItem,
  },

  mounted() {
    db.collection("todos").doc(this.id).get().then(todo => {
      if (!todo.exists) {
        this.$router.push("/NotFound");
      }
    });
  },

  firestore() {
    db.collection("categories")
      .where("user_id", "==", auth.currentUser.uid)
      .get()
      .then(result => {
        result.forEach(data => {
          this.firestoreDocId = data.id;

          data.data().categories.forEach(category => {
            this.categories.push(category);
          });
        });

        this.categories.sort();
    });      

    return {
      todo: db.collection("todos").doc(this.id),
    }
  },

  watch: {
    editMode() {
      if (!this.showCategories && this.todo) {
        db.collection("todos").doc(this.todo.id).update({content: this.todo.content});
      }
    }
  },

  methods: {
    deleteCategory(category) {
      db.collection("categories")
        .doc(this.firestoreDocId)
        .update({
          categories: firebase.firestore.FieldValue.arrayRemove(category.toLowerCase()),
      });

      this.categories = this.categories.filter((cat) => cat != category);
    },

    setCategory(category) {
      db.collection("todos").doc(this.id).update({category: category});
      this.showCategories = !this.showCategories;
    },
   
    toggleTodoStatus() {
      db.collection("todos").doc(this.id).update({done: !this.todo.done});
    },
  },
};
</script>

<template>
  <div id="todo" v-if="todo">
    <header class="pt-2">
      <span
        class="icon-text"
        :class="todo.done ? 'muted' : ''"
      >
        <span class="icon clickable" @click="toggleTodoStatus">
          <i :class="todo.done ? 'far fa-check-circle' : 'far fa-circle'" />
        </span>

        <span :class="todo.done ? 'done' : ''">{{ todo.title }}</span>
      </span>
    </header>

    <div class="box">
      <div id="category">
        <span class="icon-text" @click="showCategories = !showCategories" title="Tap to edit">
          <span class="icon clickable"><i class="far fa-folder" /></span>
          <span class="clickable capitalize">{{ todo.category }}</span>
        </span>

        <div class="modal is-active" v-if="showCategories">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box center container">
              <BaseMenuItem
                :category="'all'"
                :itemCategory="todo.category"
                @pick="setCategory"
              />

              <BaseMenuItem
                v-for="category in categories"
                :key="category"
                :category="category"
                :itemCategory="todo.category"
                @pick="setCategory"
                @delete="deleteCategory"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div id="content">
        <div id="notes">
          <div>
            <span class="icon-text clickable" @click="editMode = !editMode" title="Tap to edit">
              <span class="icon"><i class="far fa-edit" /></span>
              <span>{{ todo.content.length ? "Notes" : "Add Note" }}</span>
            </span>
          </div>
          <div class="pt-2 display-note" v-if="!editMode">
            {{ todo.content }}
          </div>
          <div class="pt-2 edit-note field" v-if="editMode">
            <div class="control">
              <textarea class="textarea is-small" rows=7 v-model="todo.content" v-on:keyup.enter="editMode = !editMode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/styles/global.sass"

header
  height: 1.5em

header .icon
  font-size: 0.75em
</style>
