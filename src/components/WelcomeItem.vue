<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  position: relative;

}

.item::before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 25px;
  /* bottom: calc(50% + 25px); */
  top: 0;
  height: 50%;
}

.item::after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 25px;
  /* top: calc(50% + 25px); */
  bottom: 0;
  height: calc(50%);
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}

i {
  color: var(--color-text);
  z-index: 10;
/* background-color: white; */
  min-width: 50px;
  height: 50px;

  font-size: 2rem;
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>

