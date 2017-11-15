const state = {
    title: '警告',
    info: '警告的内容',
    toggle: false,
    bgIndex: 99
}

// getters
const getters = {
    getAlert: state => state.alert
}

// actions
const actions = {

}

// mutations
const mutations = {
    alertShow(state, {bgIndex,title,info}) {
        let alert = state;
        alert.title = title;
        alert.info = info;
        alert.bgIndex =bgIndex;
        alert.toggle = true;
    },
    alertHide(state) {
        state.toggle = false;
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
