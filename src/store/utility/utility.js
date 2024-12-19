export const namespaced = true

export const state = {
    notifications: [],
    loading: false
}

export const getters = {
    getNotifications: state => state.notifications,
    getLoader: state => state.loading
}

export const mutations = {
    SET_NOTIFICATION(state, data) {
        state.notifications.push(data)
        if (state.notifications.length > 3) state.notifications.splice(0, 1)
    },
    CLEAR_NOTIFICAITON(state, data) {
        const index = state.notifications.findIndex(
            notification => notification.message === data.message
        )
        state.notifications.splice(index, 1)
    },
    SET_LOADING(state, loading) {
        state.loading = loading
    }
}

export const actions = {
    notification({ commit, dispatch, state }, payload) {
        commit('SET_NOTIFICATION', payload)
        setTimeout(() => {
            commit('CLEAR_NOTIFICAITON', payload)
        }, 4000);
    },
    setLoader({ commit, dispatch, state }, payload) {
        commit('SET_LOADING', payload)
    }
}