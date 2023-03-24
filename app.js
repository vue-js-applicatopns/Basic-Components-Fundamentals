let PlanPickerItemComponent = {
  template: "#plan-picker-item-template",
  props: {
    name: { type: String, required: true },
    selected: { type: Boolean, default: false },
  },
  methods: {
    select() {
      this.$emit("handleSelect", this.name);
    },
  },
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    "plan-picker-item": PlanPickerItemComponent,
  },
  data() {
    return {
      plans: ["The Curious", "The Single", "The Addict"],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
  },
};

let TodoItemComponent = {
  template: "#todo-item-template",

  data() {
    return {
      done: false,
    };
  },
};

Vue.createApp({
  components: {
    "plan-picker": PlanPickerComponent,
    "todo-item": TodoItemComponent,
  },
}).mount("#app");
