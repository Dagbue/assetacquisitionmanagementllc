<template>
  <div class="backdrop" @click="$emit('close')"></div>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  name: "BaseModal4",
  emits: ['close'],
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  color: white;
  top: 12vh;
  width: 36rem;
  height: 30rem;
  left: calc(50% - 10rem);
  margin: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  border-radius: 5px;
  padding: 2rem;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 990px) {
  dialog {
    height: 28rem;
    left: calc(50% - 16rem);
    padding: 3rem;

  }
}

@media (max-width: 550px){
  dialog {
    top: 20vh;
    width: 19rem;
    height: 24rem;
    padding: 1rem;
    left: calc(50% - 9rem);
  }
}
</style>