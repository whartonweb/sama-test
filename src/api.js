import Vue from 'vue'

const data = require('@/assets/data.json')
let api = {}

api.endpoints = {
  getCompany () {
    return {
      'CompanyName': data.CompanyName,
      'ManufacturerID': data.ManufacturerID
    }
  },
  getSalesRep () {
    return data.SalesRep
  },
  getItems () {
    return data.items
  },
  getItem (id) {
    return data.items.find(item => item.ItemID === id)
  }
}

Vue.prototype.$api = api

export default api
