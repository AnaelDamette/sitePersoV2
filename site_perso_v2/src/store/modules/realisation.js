export default {
    namespaced: true,
    state() {
        return {
            titre:"",
            texte:"texte manquant !!",
            image:"imageManquante.png",
            scroll: false
        };
    },
    mutations: {
        updateTitreRealisation(state, context) {
            state.titre = context
        },
        updateTexteRealisation(state, context) {
            state.texte = context
        },
        updateImageRealisation(state, context) {
            state.image = context
        },
        updateScrollRealisation(state, context) {
            state.scroll = context
        }
    },
    actions:{
        updateTitreRealisation(context, text){
            context.commit("updateTitreRealisation", text)
        },
        updateTexteRealisation(context, text){
            context.commit("updateTexteRealisation", text)},
        updateImageRealisation(context, text){
            context.commit("updateImageRealisation", text)},
        updateScrollRealisation(context, boolean){
            context.commit("updateScrollRealisation", boolean)},
    },
    getters: {
        titreRealisation(state) {
            return state.titre
        },
        texteRealisation(state) {
            return state.texte
        },
        imageRealisation(state) {
            return state.image
        },
        scrollEnabled(state) {
            return state.scroll
        }
    }
}