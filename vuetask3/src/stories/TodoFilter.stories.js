import TodoFilter from '../components/TodoFilter.vue';

export default {
  title: 'TodoFilter',
  component: TodoFilter,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoFilter },
  template: '<todo-Filter :stateFilter="stateFilter" @selectFilter="selectFilter" />',
});


export const todoFilter = Template.bind({});
todoFilter.args = {
  stateFilter: [
    { id: 1, label: "すべて", defaultState: 1 },
    { id: 2, label: "作業中", defaultState: 0 },
    { id: 3, label: "完了", defaultState: 0 },
  ]
};
