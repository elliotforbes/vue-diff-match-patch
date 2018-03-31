<template>
  <div v-html="html"></div>
</template>

<script>
/* eslint-disable camelcase */
import { diff_match_patch, DIFF_EQUAL, DIFF_DELETE, DIFF_INSERT } from '../utils/diffMatchPatch'

export default {
  name: 'Diff',
  props: [
    'left',
    'right'
  ],
  data: function () {
    return {
      id: null,
      html: ''
    }
  },
  mounted: function () {
    // console.log(dmp.diff_match_patch)
    let diffs = diff_match_patch.diff_main(this.left, this.right)
    diff_match_patch.diff_cleanupEfficiency(diffs)

    this.html = '<div>'
    for (let diff of diffs) {
      diff[1] = diff[1].replace(/\n/g, '<br/>')

      if (diff[0] === DIFF_EQUAL) {
        this.html += '<span class="equal">' + diff[1] + '</span>'
      }
      if (diff[0] === DIFF_DELETE) {
        this.html += '<del>' + diff[1] + '</del>'
      }
      if (diff[0] === DIFF_INSERT) {
        this.html += '<ins>' + diff[1] + '</ins>'
      }
    }
    this.html += '</div>'
  }
}
</script>
