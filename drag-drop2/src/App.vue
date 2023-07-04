<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <DragDrop></DragDrop>
    <vue2-org-tree
      :data="data1"
      :horizontal="layoutType == 'horizontal'"
      :collapsable="collapsable"
      selected-class-name="bg-tomato"
      selected-key="selectedKey"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DragDrop from "./components/DragDrop.vue";
import Vue2OrgTree from "vue2-org-tree";

export default {
  name: "App",
  components: {
    // HelloWorld,
    DragDrop,
    Vue2OrgTree,
  },
  data() {
    return {
      data1: {
        id: 0,
        label: "Grow Team Member Company",
        expand: true,
        children: [
          {
            id: 2,
            label: "Create Campaign for May-June",
            expand: true,
            type: 2,
            children: [
              {
                id: 5,
                label: "Campaign for Social Media",
                type: 1,
              },
              {
                id: 6,
                label: "Campaign for Merchant and Mall",
                type: 1,
              },
              {
                id: 9,
                label: "Create Draft for Merchant and...",
                type: 2,
              },
              {
                id: 10,
                label:
                  "Another Last and long text to go, how about it, do we need to know the best?",
                type: 2,
                children: [
                  {
                    id: 11,
                    label: "Report Monthly Budget",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            label: "Report Monthly Budget",
          },
          {
            id: 4,
            label: "Create a campaign about social...",
          },
        ],
      },
      expandAll: true,
      layoutType: "horizontal",
      collapsable: true,
    };
  },
  methods: {
    labelClassName: function () {
      return "clickable-node";
      // return data;
    },
    renderContent: function (h, data1) {
      return data1;
      // return h(2);
    },
    onExpand: function (e, data1) {
      if ("expand" in data1) {
        data1.expand = !data1.expand;

        if (!data1.expand && data1.children) {
          this.collapse(data1.children);
        }
      } else {
        this.$set(data1, "expand", true);
      }
    },
    onNodeClick: function (e, data1) {
      console.log("onNodeClick: %o", data1);
      this.$set(data1, "selectedKey", !data1.selectedKey);
    },
    collapse: function (list) {
      var _this = this;
      list.forEach(function (child) {
        if (child.expand) {
          child.expand = false;
        }

        child.children && _this.collapse(child.children);
      });
    },
    expandChange: function () {
      this.toggleExpand(this.data1, this.expandAll);
    },
    toggleExpand: function (data1, val) {
      var _this = this;
      if (Array.isArray(data1)) {
        data1.forEach(function (item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data1, "expand", val);
        if (data1.children) {
          _this.toggleExpand(data1.children, val);
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
