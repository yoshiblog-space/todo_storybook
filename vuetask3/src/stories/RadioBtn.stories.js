import RadioBtn from '../components/RadioBtn.vue';

export default {
  title: 'RadioBtn',
  component: RadioBtn,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RadioBtn },
  template: '<radio-Btn v-bind="$props" @clickFilters = "clickFilters" />',

});


export const allBtn = Template.bind({});
allBtn.args = {
  filterLabel: 'すべて',
  defaultState: 1,
};

export const doBtn = Template.bind({});
doBtn.args = {
  filterLabel: '作業中',
  defaultState: 0,
};

export const completeBtn = Template.bind({});
completeBtn.args = {
  filterLabel: '完了',
  defaultState: 0,
};

