<script>
/* global lisk */
export default {
  data () {
    return {
      latestBlocks: [],
      numBlocks: 20
    }
  },
  mounted () {
    // Instantiate instance of lisk-js
    this.LSK = lisk.api()
    this.retrieveLatestBlocks(this.numBlocks)
    setInterval(() => {
      this.retrieveLatestBlocks(this.numBlocks)
    }, 10000)
  },

  methods: {
    retrieveLatestBlocks (numBlocks) {
      this.LSK.listBlocks(numBlocks, (res) => {
        if (res.success) {
          this.latestBlocks = res.blocks
        }
      })
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="latest-blocks-list">
    <h1>Latest {{numBlocks}} blocks</h1>
    <ul>
      <li
        v-for="block in latestBlocks">
        {{block.id}}
      </li>
    </ul>
  </div>
</template>