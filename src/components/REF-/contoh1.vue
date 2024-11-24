<template>
  <div>
    <h1>Daftar Buah</h1>
    <ul>
      <li v-for="fruit in fruits" :key="fruit.name">
        {{ fruit.name }} - Rp. {{ fruit.price }}
      </li>
    </ul>
    <input v-model="newFruitName" placeholder="Nama Buah" />
    <input v-model="newFruitPrice" type="number" placeholder="Harga Buah" />
    <button @click="addFruit">Tambah Buah</button>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

// Membuat array reaktif yang berisi objek
const fruits = ref([]);
const newFruitName = ref("");
const newFruitPrice = ref(0);

// Fungsi untuk menambahkan buah baru
const addFruit = () => {
  if (newFruitName.value && newFruitPrice.value > 0) {
    // Menambahkan objek buah baru ke array
    fruits.value.push({
      name: newFruitName.value,
      price: Number(newFruitPrice.value), // Pastikan harga adalah angka
    });
    newFruitName.value = ""; // Mengosongkan input nama
    newFruitPrice.value = 0; // Mengosongkan input harga
  }
};
</script>