<template>
  <span class="nav-item" v-if="options && options.length > 0">
    Version:
    <select v-model="selected" @change="onChange">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </span>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      selected: undefined,
      options: [],
    };
  },
  created: async function() {
    try {
      let res = await Axios.get(
        'https://api.github.com/repos/FabOS-AI/fabos-slm/git/trees/github-pages',
      );
      const versionNode = res.data.tree.find(e => {
        return e.path.toLowerCase() === 'version';
      });
      res = await Axios.get(versionNode.url);
      this.options = res.data.tree.map(e => {
        return {value: e.path, text: e.path};
      });
      this.options.sort((e1, e2) => {
        const e1Arr = e1.text.split('.');
        const e2Arr = e2.text.split('.');
        for (let i = 0; i < e1Arr.length && i < e2Arr.length; i++) {
          const e1V = parseInt(e1Arr[i]);
          const e2V = parseInt(e2Arr[i]);
          if (e1V !== e2V) return e2V - e1V;
          if (e1Arr[i] !== e2Arr[i]) return e2Arr[i] - e1Arr[i];
        }
        return e1.text === e2.text ? 0 : e2.text < e1.text ? -1 : 1;
      });
      this.options.unshift({value: 'main', text: 'main'});
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/vuepress-test/version/')) {
        const start = 18;
        const end = path.indexOf('/', start);
        this.selected = path.substring(start, end);
      } else {
        this.selected = 'main';
      }
    } catch (ex) {}
  },
  methods: {
    onChange(event) {
      let targetVersionPath = ''
      if (this.selected === 'main') {
        targetVersionPath = ''
      } else {
        targetVersionPath = `/version/${this.selected}`
      }
      
      let path = window.location.pathname.toLowerCase();
      let regex = new RegExp('/version/[0-9]+.[0-9]+');
      let isVersionInPath = regex.test(path);
      if (isVersionInPath) {
          let versionPathSegment = regex.exec(path)[0]
          path = path.replace(versionPathSegment, targetVersionPath)
      }
      else {
          path = targetVersionPath + path
      }
      
      window.location.pathname = path
    },
  },
};
</script>