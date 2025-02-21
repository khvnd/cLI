<template>
    <div class="slider">
      <button @click="prevSlide" class="prev">‹</button>
      <div class="slide">
      <img :src="images[currentIndex]" alt="slide" class="slider-img"  @click="openModal(images[currentIndex])"/>
      
      <button class="zoom-btn" @click="openModal(images[currentIndex])"><img src="/img/poisk.png" class="btn-poisk" alt=""></button>
    </div>
      <button @click="nextSlide" class="next">›</button>
      <div v-if="modalOpen" class="modal" @click="closeModal">
        <img :src="modalImage" class="modal-content" />
      </div>
      <div class="pagination">
        <span v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }" @click="currentIndex = index"></span>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: {
      images: Array,
    },
    data() {
      return {
        currentIndex: 0,
        modalOpen: false,
        modalImage: ""
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      openModal(image) {
      this.modalImage = image;
      this.modalOpen = true;
     },
      closeModal() {
      this.modalOpen = false;
     }
    },
  };
  </script>
  
  <style scoped>
  .slider {
    position: relative;
    height: 869px;
    margin-bottom: 110px;
    
  }
  .slider-img {
    width: 1200px;
    border-radius: 70px;
    height: 799px;
  }
  .prev,
  .next {
    position: absolute;
    top: 47%;
    transform: translateY(-50%);
    background: rgb(255, 255, 255);
    color: #CDA274;
    border: none;
    padding: 10px;
    cursor: pointer;
    opacity: 0; /* Скрываем по умолчанию */
    transition: opacity 0.3s ease-in-out;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }

  .slider:hover .prev,
  .slider:hover .next {
    opacity: 1;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .pagination span {
    width: 10px;
    height: 10px;
    margin: 5px;
    background: gray;
    border-radius: 50%;
    cursor: pointer;
  }
  .pagination span.active {
    background: black;
  }

  .zoom-btn {
    width: 100px;
    height: 100px;
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-poisk {
  width: 37px;
  height: 37px;
}

.slide:hover .zoom-btn {
  opacity: 1;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}
  
  </style>
  