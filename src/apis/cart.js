import request from '@/utils/http'
//封装购物车接口

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }

  //获取购物车
  export const findNewCartAPI = () => {
    return request({
      url: '/member/cart',
    })
  }


  // 删除购物车
export const delCartAPI = (ids) => {
    return request({
      url: '/member/cart',
      method: 'DELETE',
      data: {
        ids
      }
    })
  }