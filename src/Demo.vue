<template>
  <div>
      <h2>Diff</h2>
      <diff :left="text1" :right='text2'></diff>
      <h2>Line Diff</h2>
      <line-diff :left="text1" :right='text2'></line-diff>
      <h2>Semantic Diff</h2>
      <sem-diff :left="text1" :right='text2'></sem-diff>
      <h2>Processing Diff</h2>
      <processing-diff :left="text1" :right='text2'></processing-diff>
  </div>
</template>

<script>
import Diff from '@/components/Diff'
import LineDiff from '@/components/LineDiff'
import SemanticDiff from '@/components/SemanticDiff'
import ProcessingDiff from '@/components/ProcessingDiff'

export default {
  name: 'Demo',
  data: function () {
    return {
      text1: 'I am the very model of a modern Major-General, \n I\'ve information vegetable, animal, and mineral\n',
      text2: 'I am the very model of a cartoon individual,\n My animation\'s comical, unusual, and whimsical\n'
    }
  },
  components: {
    'diff': Diff,
    'line-diff': LineDiff,
    'sem-diff': SemanticDiff,
    'processing-diff': ProcessingDiff
  }
}
</script>

<style scoped>

</style>
