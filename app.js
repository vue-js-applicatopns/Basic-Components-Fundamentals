let PlanComponent = {
  template: "#plan-template",
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
    plan: PlanComponent,
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

Vue.createApp({
  components: {
    "plan-picker": PlanPickerComponent,
  },
}).mount("#app");
