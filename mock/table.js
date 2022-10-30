const Mock = require('mockjs')

const data = Mock.mock({
  'items|100': [{
    id: '@id',
    title: '@csentence(10, 20)',
    'status|1': ['未受理', '办理中', '已完结'],
    author: '@cname',
    display_time: '@time',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
