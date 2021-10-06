import { createStore } from 'vuex'

export default createStore({
    state: {
        lang_code: 'zh_TW',
    },
    mutations: {
        changeLang(state, langCode){
            state.lang_code = langCode;
        },
    },
    actions: {
    },
    modules: {
    }
})
