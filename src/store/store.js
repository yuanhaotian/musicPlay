import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        singer:{},
        playing:false,//true开始播放，false关闭
        fullScreen:false,//true全屏幕播放
        playList:[],//播放列表
        sequenceList:[],//顺序播放列表
        mode:0,//当前播放模式;0顺序播放，1单曲循环，2随机
        currentIndex:-1,//当前歌曲顺序
    },
    getters:{   //对数据处理，类似于computed。不能对state中数据改变
        // chageName(state){
        //     state.name =999;
        //     return state;
        // }
    },
    mutations:{  //改变state中对值
        // change(state,payload){
        //    state.name = payload;
        // }
        SET_SINGER(state,payload){
            state.singer = payload;
        },
        SET_PLAYING(state,payload){
            state.playing = payload;
        },
        SET_FULLSCREEN(state,payload){
            state.fullScreen = payload;
        },
        SET_PLAYLIST(state,payload){
            state.playList = payload;
        },
        SET_SEQUENCELIST(state,payload){
            state.sequenceList = payload;
        },
        SET_MODE(state,payload){
            state.mode = payload;
        },
        SET_CURRENTINDEX(state,payload){
            state.currentIndex = payload;
        }
    },
    actions:{
        // change2(context,payload){ //payload参数
        //    context.commit('change',payload) //mutations里对函数名字
        // }
    }
})

export default store;