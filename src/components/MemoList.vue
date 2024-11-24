<template>
  <div>
    <div class="button-container">
      <!-- Button to add a new memo -->
      <button class="add-memo-button" @click="toggle" v-if="!isVisible">
        +
      </button>

      <div v-if="isVisible">
        <textarea v-model="newMemoText" placeholder="Tulis memo..."></textarea>
        <p style="color: red">{{ errorMessage }}</p>
        <button @click="addMemo">Simpan</button>
        <button @click="toggle">Batal</button>
      </div>
    </div>
    <div class="memo-container">
      <Memo
        v-for="memo in memos"
        :key="memo.id"
        :memo="memo"
        @update="updateMemo"
        :onDelete="removeMemo"
        tanggal="tanggal"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Memo from "./Memo.vue";

export default {
  components: {
    Memo,
  },
  setup() {
    const memos = ref([]);
    const isVisible = ref(false); // Menambahkan state untuk visibilitas
    const newMemoText = ref(""); // Menambahkan state untuk teks memo baru
    const tanggal = new Date().toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Atur ke true untuk format 12 jam (AM/PM)
    });

    const toggle = () => {
      isVisible.value = !isVisible.value; // Mengubah nilai isVisible
      errorMessage.value = "";
    };

    const errorMessage = ref("");

    const addMemo = () => {
      if (newMemoText.value.trim() === "") {
        errorMessage.value = "Teks memo tidak boleh kosong.";
        return;
      }

      errorMessage.value = "";

      const newMemo = {
        id: Date.now(), // Gunakan timestamp sebagai ID unik
        text: newMemoText.value, // Ambil teks dari input
        color: getRandomColor(), // Warna acak
        tanggal: tanggal,
      };
      memos.value.push(newMemo); // Tambahkan memo baru ke daftar
      newMemoText.value = ""; // Kosongkan input setelah menambah
      isVisible.value = false; // Sembunyikan textarea setelah menambah
    };

    const updateMemo = (updatedMemo) => {
      const index = memos.value.findIndex((memo) => memo.id === updatedMemo.id);
      if (index !== -1) {
        memos.value[index] = updatedMemo;
      }
    };

    const removeMemo = (id) => {
      memos.value = memos.value.filter((memo) => memo.id !== id);
    };

    const getRandomColor = () => {
      const colors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    return {
      memos,
      addMemo,
      updateMemo,
      removeMemo,
      isVisible,
      toggle,
      newMemoText,
      tanggal,
      errorMessage,
    };
  },
};
</script>


<style>
.button-container {
  margin-bottom: 20px;
  text-align: center;
}

/* Add Memo Button */
.add-memo-button {
  background-color: #ff6f61;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.add-memo-button:hover {
  background-color: #e55b50;
  transform: scale(1.1);
}
/* Memo Input Form */
.memo-input-container {
  margin: 20px auto;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
textarea:focus {
  border-color: #ff6f61;
}
.button-group {
  display: flex;
  justify-content: space-between;
}

.save-button,
.cancel-button {
  flex: 1;
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.save-button {
  background-color: #4caf50;
  color: white;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}

.save-button:hover {
  background-color: #45a049;
}

.cancel-button:hover {
  background-color: #e53935;
}

/* Memo Container */
.memo-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px; /* Tambahkan padding untuk responsivitas */
  overflow: auto; /* Pastikan semua elemen terlihat */
}

/* Memo Styling */
.memo {
  background-color: var(--memo-color, #fff);
  border-radius: 8px;
  padding: 15px;
  width: 200px;
  min-height: 120px;
  height: auto; /* Tinggi otomatis mengikuti konten */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.memo button {
  align-self: flex-end;
  margin-top: 10px;
}

/* Responsivitas */
@media (max-width: 600px) {
  .memo {
    width: calc(100% - 40px);
    max-width: 300px;
  }

  .add-memo-button {
    font-size: 16px;
    padding: 8px 15px;
  }
}
textarea {
  width: 100%;
  height: 100px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 15px;
  outline: none;
  transition: border-color 0.3s;
}
</style>