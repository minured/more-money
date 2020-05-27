<template>

  <!--使用插槽把 内容 传给Layout组件-->
  <Layout content-class="layout">
    <NumberPad/>
    <Types/>
    <notes/>
    <Tags :tagsData.sync="tags"/>

  </Layout>

</template>

<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue'
  import Types from '@/components/Money/Types.vue'
  import Notes from '@/components/Money/Notes.vue'
  import Tags from '@/components/Money/Tags.vue'

  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
    data(){
      return {
        tags: ['衣', '食', '住', '行']
      }
    }
  }
</script>

<!--添加一个没有scoped的style-->
<style>
  .layout {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>

</style>
