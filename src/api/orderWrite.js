import http from './http'


// 查询国籍
export const syncCountrySuggest = (args, loading = false) => http.post("/vue/order/countrySuggest.do", args, loading);

//杂费
export const syncSurchargeRoom = (args, loading = false) => http.post("/vue/order/surchargeRoom.do", args, loading);