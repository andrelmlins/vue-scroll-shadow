<template>
  <main>
    <h1>Vue Scroll Shadow</h1>
    <h4>
      Component that customizes the scroll and inserts shadow when scrolling
      exists
    </h4>
    <div class="row">
      <div class="card">
        <scroll-shadow>
          <ul>
            <li v-for="car in cars" :key="car">{{ car }}</li>
          </ul>
        </scroll-shadow>
      </div>
      <div class="card">
        <ul style="overflow-y:scroll">
          <li v-for="car in cars" :key="car">{{ car }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import cars from './cars';

export default {
  name: 'App',
  data() {
    return { cars };
  }
};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
}
h1 {
  color: white;
  margin-bottom: 0px;
  font-size: 40pt;
}
h4 {
  color: white;
}
.card {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 400px;
  max-width: 40%;
  background-color: white;
  max-height: 400px;
  margin: 0 10px;
}
ul {
  list-style: none;
  border-radius: 2px;
  padding: 0px;
  margin: 0px;
}

li {
  padding: 15px;
  color: #333;
}

.row {
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
</style>
