<template>
  <div class="drag-drop">
    <div class="drag-drop-main">
      <p>DragDrop</p>
      <!-- <draggable
        v-model="myArray"
        group="people"
        @start="drag = true"
        @end="drag = false"
      >
        <div v-for="element in myArray" :key="element.id">
          {{ element.name }}
        </div>
      </draggable> -->
      <!-- <Vue2OrgTree
        :data="data"
        :props="props"
        :horizontal="horizontal"
        :label-width="labelWidth"
        :collapsable="collapsable"
        :render-content="renderContent"
        :label-class-name="labelClassName"
        :selected-class-name="selectedClassName"
        :selected-key="selectedKey"
      /> -->
      <!-- <vue2-org-tree
        :data="data"
        :horizontal="layoutType == 'horizontal'"
        :collapsable="collapsable"
        :label-class-name="labelClassName"
        :render-content="renderContent"
        @on-node-click="onNodeClick"
      /> -->
    </div>
  </div>
</template>

<script>
// import Vue2OrgTree from "vue2-org-tree";
// import org-tree-node from ""
// import Vue from "vue";
// import Vue2OrgTree from "vue2-org-tree";
// import draggable from "vuedraggable";

export default {
  name: "DragDrop",
  // components: { Vue2OrgTree },
  components: {
    // draggable,
    // Vue2OrgTree,
  },
  data() {
    return {
      // dragState: {
      //   dragg: null,
      //   drop: null,
      // },
      // myArray: [
      //   { name: "Prelude" },
      //   { name: "Verse" },
      //   { name: "Middle", children: [{ name: "Chorus" }, { name: "Verse" }] },
      //   { name: "Last Chorus" },
      // ],
      data: {
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
    // onDragStart(event, data) {
    //   let dragState = this.dragState;
    //   try {
    //     event.dataTransfer.setData("text/plain", "");
    //   } catch (e) {
    //     dragState.drag = data;
    //   }
    // },
    // onDragOver(event) {
    //   event.preventDefault();
    // },
    // onDrop(event, data) {
    //   event.preventDefault();
    //   let dragState = this.dragState;
    //   let drag = dragState.drag;
    //   dragState.drop = data;
    //   this.$emit("on-node-drop", event, drag, data);
    // },
    labelClassName: function () {
      return "clickable-node";
    },
    renderContent: function (h, data) {
      return data.label;
      // return h(2);
    },
    onExpand: function (e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;

        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    onNodeClick: function (e, data) {
      console.log("onNodeClick: %o", data);
      this.$set(data, "selectedKey", !data.selectedKey);
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
      this.toggleExpand(this.data, this.expandAll);
    },
    toggleExpand: function (data, val) {
      var _this = this;
      if (Array.isArray(data)) {
        data.forEach(function (item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data, "expand", val);
        if (data.children) {
          _this.toggleExpand(data.children, val);
        }
      }
    },
  },
};
</script>
