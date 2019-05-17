import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: i + 1,
    'name|1': ['name1', 'name2', 'name3', 'name4'],
    'rarity|1': ['不朽', '神话', '传说', '至宝'],
    steam: '@first',
    steam_rmb: '@integer(10, 500)',
    c5: '@integer(300, 5000)',
    c5_steam: '@integer(0, 100)',
    onsale_s: '@integer(0, 50)',
    timestamp: +Mock.Random.date('T')
  }))
}

export default {
  getC5_SList: config => {
    const { name, rarity, page = 1, limit = 20, sort } = param2Obj(config.url)

    console.log('page' + page)
    console.log('limit' + limit)
    console.log('sort' + sort)
    console.log('name' + name)
    console.log('rarity' + rarity)

    let mockList = List.filter(item => {
      if (name && item.name.indexOf(name) < 0) return false
      if (rarity && rarity !== 'All' && item.rarity.indexOf(rarity) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    console.log('mockList.length' + mockList.length)
    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
}
