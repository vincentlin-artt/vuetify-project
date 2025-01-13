<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <v-app>
    <h1>This is Vincet's Trial HomePage</h1>
    <v-btn class="pink white--text">按我</v-btn>
    <div div class="text-center">
      <v-btn>click me</v-btn>
    </div>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn density="compact">Compact Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="comfortable">Comfortable Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default" color="sucess">Default Button</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center">
      <v-btn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle">
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>
        Button
        <template v-slot:append>
          <v-icon color="warning"></v-icon>
        </template>
      </v-btn>
    </div>
    <v-divider class="mx-2" vertical></v-divider>
    <div class="text-center">
      <v-btn
        class="text-none text-subtitle-1"
        color="#5865f2"
        size="large"
        variant="elevated"
        density="default"
      >
        Create Event
      </v-btn>
    </div>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn size="x-small">Extra small Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="small">Small Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn>Regular Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="large">Large Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="x-large" color="#5865f2">X-Large Button</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
