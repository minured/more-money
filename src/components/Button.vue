<template>
<!--  <button @click="$emit('click', $event)">-->
  <button>
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
    @Prop(String) buttonText!: string;

  }
</script>

<style lang="scss" scoped>

  button {
    padding: 8px 16px;
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;

  }
</style>