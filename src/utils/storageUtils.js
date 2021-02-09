import store from 'store'
const USERKEY='userkey'
export  default {
    saveUser(username){
       store.set(USERKEY,username)
    },

    getUser(){
        return store.get(USERKEY)||{}
    },

    removeUser(){
       store.remove(USERKEY)
    }

}