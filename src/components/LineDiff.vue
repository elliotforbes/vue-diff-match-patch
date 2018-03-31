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
  created: function () {
    let chars = diff_match_patch.diff_linesToChars_(this.left, this.right)
    let diffs = diff_match_patch.diff_main(chars.chars1, chars.chars2, false)
    diff_match_patch.diff_charsToLines_(diffs, chars.lineArray)
    this.html = '<div>'
    for (let diff of diffs) {
      diff[1] = diff[1].replace(/\n/g, '<br/>')
      if (diff[0] === DIFF_EQUAL) {
        this.html += '<span class="equal">' + diff[1] + '</span>'
      }
      if (diff[0] === DIFF_DELETE) {
        this.html += '<div class="del"> - <del>' + diff[1] + '</del></div>\n'
      }
      if (diff[0] === DIFF_INSERT) {
        this.html += '<div class="ins"> + <ins>' + diff[1] + '</ins></div>\n'
      }
    }
    this.html += '</div>'
  }
}
</script>
