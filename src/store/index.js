import Vuex from "vuex";
import * as auth from "@/store/auth/auth";
import * as utility from "@/store/utility/utility";

export default new Vuex.Store({
  modules: {
    auth,
    utility,
  },
});

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
