Page({
  data: {
    friends: [{
      id: 1,
      name: "张三三",
      photo: "/../image/timg (6).jpeg",
      group: 1
    }, {
      id: 2,
      name: "李四四",
      photo: "/../image/timg (2).jpeg",
      group: 1
    }
    ],
    groups: [{
      id: 1,
      name: "我的好友",
      hidden: true,
      count: 2
    }, {
      id: 2,
      name: "我的朋友",
      hidden: true,
      count: 1
    }],
    expanded: false,
  },
  groupclick: function (e) {
    var id = e.currentTarget.id, groups = this.data.groups;
    for (var i = 0, len = groups.length; i < len; ++i) {
      if (groups[i].id == id) {
        groups[i].hidden = !groups[i].hidden;
      }
    }
    this.setData({
      groups: groups
    });
  },
  touchS: function (e) {  // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let itemData = App.Touches.touchM(e, this.data.itemData, this.data.startX)
    itemData && this.setData({ itemData })

  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let itemData = App.Touches.touchE(e, this.data.itemData, this.data.startX, width)
    itemData && this.setData({ itemData })
  },
  itemDelete: function (e) {  // itemDelete
    let itemData = App.Touches.deleteItem(e, this.data.itemData)
    itemData && this.setData({ itemData })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
})