import axios from '@/plugins/axios'
import store from '@/store'
import Code from '@/static/Code'

export default {

    data: () => ({
        ...Code
    }),

    methods: {
        /**
         * @param {*} url 
         * @param {*} method 
         * @param {*} data paramter 
         * @returns 
         */
        async $api(url, method, data, errorCallback) {

            // 공통 API를 구현한다.

            // 토큰이 유효하지 않을때 로그인 화면으로 전환하도록 한다.

            // 토큰이 유효하지 않을때는 status는 401이며, error.response.data.error 값이 'Invalid token' 이다.
            
        },

    },

}