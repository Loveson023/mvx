<template>
  <div class="mavrix-divider">
    <div class="divider-line">
      <div class="line-left"></div>

      <img src="/Mavrix.svg" alt="Mavrix Logo" class="mavrix-icon" />

      <div class="line-right"></div>
    </div>
  </div>
</template>

<style scoped>
.mavrix-divider {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
  display: flex;
  justify-content: center;
}

.divider-line {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100% !important; /* adjust width as needed */
}

.line-left,
.line-right {
  height: 1px;
  flex: 1;
}

.line-left {
  background: linear-gradient(
    to right,
    rgba(174, 115, 83, 0) 0%,  /* start transparent */
    rgba(174, 115, 83, 1) 100% /* fade in */
  );
}

.line-right {
  background: linear-gradient(
    to right,
    rgba(174, 115, 83, 1) 0%,  /* solid at icon */
    rgba(174, 115, 83, 0) 100% /* fade out */
  );
}

.mavrix-icon {
  width: 25px;
  height: 25px;
  margin: 0 20px;
}
</style>
