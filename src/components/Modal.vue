<template>
  <div
    class="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    v-if="blogData"
  >
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >
          <h5
            class="text-xl font-medium leading-normal text-gray-800"
            id="exampleModalLabel"
          >
            <input type="text" :value="newTitle" @input="updateTitle" />
            <!-- <slot name="title"> This is the default footer! </slot> -->
          </h5>
        </div>
        <div class="modal-body relative p-4">
          <input type="text" :value="newText" @input="updateText" />
          <!-- <slot name="blogText"> This is the default footer! </slot> -->
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
        >
          <button
            type="button"
            class="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            @click="close"
          >
            Close
          </button>
          <button
            type="button"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            @click="save({ blogTitle: newTitle, blogText: newText })"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      newTitle: "",
      newText: "",
      id: "",
    };
  },
  props: {
    blogData: Object,
  },
  created() {
    this.newTitle = this.blogData[0].blogData.BlogTitle;
    this.newText = this.blogData[0].blogData.BlogText;
    this.id = this.blogData[0].id;
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save(data) {
      const newData = { id: this.id, ...data };
      this.$emit("save", newData);
    },
    updateTitle(e) {
      this.newTitle = e.target.value;
    },
    updateText(e) {
      this.newText = e.target.value;
    },
  },
};
</script>
