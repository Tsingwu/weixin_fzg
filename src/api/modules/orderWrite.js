import http from '../http'


// 查询国籍
export const syncCountrySuggest = (args, loading = false) => http.post("/vue/order/countrySuggest.do", args, loading);

//杂费
export const syncSurchargeRoom = (args, loading = false) => http.post("/vue/order/surchargeRoom.do", args, loading);

//适用市场
export const syncProperMarket = (args, loading = false) => http.get("/vue/order/properMarket.do", args, loading);

//查价
export const syncProductInfo = (args, loading = false) => http.post("/vue/order/write.do", args, loading);

//验价
export const syncProductCheck = (args, loading = false) => http.post("/vue/order/validate.do", args, loading);

//下单
export const syncSaveOrder = (args, loading = false) => http.post("/vue/order/saveOrder.do", args, loading);
