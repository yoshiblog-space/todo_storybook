import AddTodo from '../components/AddTodo.vue';

export default {
  title: 'AddTodo',
  component: AddTodo,
  argTypes: {
    getTodo: {
      action: 'getTodo'
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AddTodo },
  template: '<add-Todo @getTodo="getTodo" />',
});


export const addTodo = Template.bind({});

