<template>
  <div>
    <h1>Daftar Item</h1>
    <ul>
      <li v-for="item in items" :key="item.id" :style="{ color: item.warna }">
        {{ item.isiText }} - {{ item.tanggal }} - ID: {{ item.id }}
      </li>
    </ul>
    <input v-model="newItemText" placeholder="Tambahkan Item" />
    <button @click="addItem">Tambah Item</button>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref } from "vue";

// Mendefinisikan tipe untuk item
interface Item {
  isiText: string;
  tanggal: string;
  warna: string;
  id: number;
}

// Membuat array reaktif dengan tipe Item
const items = ref<Item[]>([]);
const newItemText = ref<string>(""); // Deklarasi ref untuk newItemText

// Fungsi untuk menghasilkan ID acak
const generateRandomId = (): number => {
  return Math.floor(Math.random() * 10000); // ID acak antara 0-9999
};

// Fungsi untuk menghasilkan warna acak
const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Fungsi untuk menambahkan item baru
const addItem = (): void => {
  const newItem: Item = {
    isiText: newItemText.value,
    tanggal: new Date().toLocaleDateString(), // Tanggal saat ini
    warna: generateRandomColor(), // Warna acak
    id: generateRandomId(), // ID acak
  };

  items.value.push(newItem); // Menambahkan item baru ke array
  newItemText.value = ""; // Mengosongkan input setelah menambahkan item
};
</script>
  
  <style>
/* Tambahan gaya jika diperlukan */
</style>