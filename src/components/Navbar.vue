<template>
  <nav class="bg-gray-500 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center">
      <router-link to="/"
        ><span class="text-3xl">Travis Pandos</span></router-link
      >
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        @click="showMenu = !showMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="w-full md:block md:w-auto"
        id="mobile-menu"
      >
        <ul
          class="flex flex-col items-center mt-4 md:flex-row w-full md:space-x-8 md:mt-0 md:text-lg md:font-medium"
        >
          <li>
            <router-link
              to="/"
              :class="
                $route.name === 'Home'
                  ? 'text-red-600 bg-blue-700'
                  : 'text-gray-700'
              "
              @click="toggleMenu"
              class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white"
              aria-current="page"
            >
              Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              :class="
                $route.name === 'About'
                  ? 'text-red-600 bg-blue-700'
                  : 'text-gray-700'
              "
              @click="toggleMenu"
              class="block py-2 pr-4 pl-3 text-gray-700 md:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</router-link
            >
          </li>

          <li>
            <router-link
              to="/contact"
              :class="
                $route.name === 'Contact'
                  ? 'text-red-600 bg-blue-700'
                  : 'text-gray-700'
              "
              class="block py-1 pr-4 pl-3 md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              @click="toggleMenu"
              >Contact</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <router-link
              to="/admin"
              :class="
                $route.name === 'Admin'
                  ? 'text-red-600 bg-blue-700'
                  : 'text-gray-700'
              "
              class="block py-1 pr-4 pl-3 md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              @click="toggleMenu"
              >Admin</router-link
            >
          </li>
          <li v-if="!isLoggedIn">
            <button @click="googleLogin">Login</button>
          </li>
          <li v-else class="flex flex-row px-4">
            <img
              :src="userData.photoURL"
              alt="profilePicture"
              class="rounded-full w-12 mr-2"
            />
            <h2 class="flex items-center mr-4">{{ userData.displayName }}</h2>
            <button @click="googleLogout" class="ml-4">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = false;
    },
    googleLogout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
    },
    googleLogin() {
      this.$store.dispatch("loginUser");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    userData() {
      return this.$store.getters.getUserData;
    },
  },
};
</script>
