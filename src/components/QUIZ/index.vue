<script setup>
import { ref, onMounted, watch } from "vue";
import quizDataJson from "@/assets/data/quiz-data.json"; // Menggunakan nama berbeda untuk menghindari konflik

// Menggunakan ref untuk menyimpan data kuis
const quizData = ref(quizDataJson);

onMounted(() => {
  // Menampilkan data JSON di console
  //   console.log(quizData.value);
});

const searchTerm = ref("");
const newValue = ref("");

const searchTimeout = ref(null);
watch(searchTerm, (newTerm) => {
  clearTimeout(searchTimeout.value);
  searchTimeout.value = setTimeout(() => {
    quizData.value = quizDataJson.filter((category) =>
      category.title.toLowerCase().includes(newTerm.toLowerCase())
    );
    if (newTerm === "") {
      quizData.value = quizDataJson;
    }
  }, 300);
});
</script>

<template>
  <main>
    <header>
      <h1 id="title">Quis Vue</h1>
      <input
        v-model.trim="searchTerm"
        id="search-input"
        type="text"
        placeholder="Masukkan Nama"
      />
    </header>

    <section id="quiz-section">
      <div v-for="category in quizData" :key="category.id" class="card">
        <h2 style="text-align: center">{{ category.title }}</h2>
        <img :src="category.img" alt="" />
        <div>
          <h2>Jumlah Soal: {{ category.questions.length }}</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#title {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 24px;
  color: #333;
  background-color: #fff;
  transition: all 0.3s ease;
}

#title:hover {
  background-color: #eaeaea;
}

#search-input {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  width: 250px;
  transition: border-color 0.3s;
}

#search-input:focus {
  border-color: #007bff;
  outline: none;
}

#quiz-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

.card {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}

.card-header h2 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
}

.card-header p {
  font-size: 14px;
  color: #666;
}

/* Gambar */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>