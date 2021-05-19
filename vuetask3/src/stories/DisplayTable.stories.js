import DisplayTable from '../components/DisplayTable.vue';
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import mutations from '../store/mutations'
import actions from '../store/actions'
import getters from '../store/getters'

export default {
  title: 'DisplayTable',
  component: DisplayTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DisplayTable },
  template: '<display-Table :todoList="filterTodoList" />',
  store: new Vuex.Store({
    state: {
      todoList: [
        { todoId: 0, todoComment: "コメント１", todoState: "作業中" },
        { todoId: 1, todoComment: "コメント２", todoState: "完了" },
        { todoId: 2, todoComment: "コメント３", todoState: "作業中" },
      ],
    },
    mutations,
    actions,
    getters
  }),
  computed: {
    filterTodoList() {
      return this.$store.getters.doneFilter("すべて");
    },
  },
});


export const displayTable = Template.bind({});
