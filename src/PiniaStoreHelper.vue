<script lang="ts" setup>
import { inject } from 'vue'

const error = inject("stPlugin");

</script>

<template>
  <div>
      {{error}}
      <slot v-if="!error" name="main"></slot>
      <slot v-else name="error">Error running application.</slot>
  </div>
</template>
