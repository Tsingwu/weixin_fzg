import http from '../http'


// 查询某个城市下的所有行政区和商圈
export const syncGetAreaBiz = (args, loading = false) => http.post("/vue/hotel/getZone.do", args, loading)


// 根据关键字查酒店列表
export const syncGetHotels = (args, loading = false) => http.post("/vue/hotel/suggest.do", args, loading)


// 查询酒店列表  /vue/hotel/query.do
export const syncGetHotelList = (args, loading = false) => http.post("/vue/hotel/queryHotelListNew.do", args, loading)
// export const syncGetHotelList = (args, loading = false) => http.post("/vue/hotel/query.do", args, loading)



// // 根据城市 id 查对应的 '行政区' 、'商业圈'
// export const syncGetZone = (args, loading = false) => http.post("/hotel/getZone.do", args, loading)



// // 查询酒店价格，(缓存价格)
// export const syncGetHotelPriceListInStock = (args, loading = true) => http.post("/hotel/getHotelPriceListInStock.do", args, loading)


// // 查询酒店价格，(实查)
// export const syncGetHotelPriceList = (args, loading = true) => http.post("/hotel/getHotelPriceList.do", args, loading)


// // 查询房型信息
// export const syncGetRoomInfo = (args, loading = false) => http.post("/hotel/roomInfo.do", args, loading)

