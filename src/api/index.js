import * as common from './modules/common'
import * as hotelList from './modules/hotelList'
import * as hotelDetail from './modules/hotelDetail'
import * as citySelect from './modules/citySelect'
import * as orderWrite from './modules/orderWrite'

const api = {
  common,
  hotelList,
  hotelDetail,
  citySelect,
  orderWrite
}

// define install for vue.use()
Object.defineProperty(api, "install", {
  configurable: false,
  enumberable: false,
  writable: false,
  value: function (Vue, options) {
    Vue.$api = api
    Vue.prototype.$api = api
  }
})

export default api
