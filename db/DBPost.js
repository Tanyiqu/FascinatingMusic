class DBPost {

  // 构造器
  constructor() {
    this.name = 'My name is DBPost'
  }

  // 根据关键词获取搜索结果
  search(searchword) {
    var result = [{
      'name': 'name1',
      'author': 'author1'
    }, {
      'name': 'name2',
      'author': 'author2'
    }, {
      'name': 'name3',
      'author': 'author3'
    }, {
      'name': 'name4',
      'author': 'author4'
    }, {
      'name': 'name5',
      'author': 'author5'
    }, {
      'name': 'name6',
      'author': 'author6'
    }, {
      'name': 'name2',
      'author': 'author2'
    }, {
      'name': 'name3',
      'author': 'author3'
    }, {
      'name': 'name4',
      'author': 'author4'
    }, {
      'name': 'name5',
      'author': 'author5'
    }, {
      'name': 'name6',
      'author': 'author6'
    }, {
      'name': 'name2',
      'author': 'author2'
    }, {
      'name': 'name3',
      'author': 'author3'
    }, {
      'name': 'name4',
      'author': 'author4'
    }, {
      'name': 'name5',
      'author': 'author5'
    }, {
      'name': 'name6',
      'author': 'author6'
    }]
    return result
  }

  // constructor(id) {
  //   this.storageKeyName = 'postList';
  //   this.id = id
  // }

  // getAllPostData() {
  //   var res = wx.getStorageSync(this.storageKeyName);
  //   if (!res) {
  //     res = require('../data/mydata.js').listData
  //     this.execSetStorageSync(res);
  //   }
  //   return res;
  // }

  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data)
  }

  // getPostItemById() {
  //   var postsData = this.getAllPostData();
  //   var len = postsData.length;
  //   for (var i = 0; i < len; i++) {
  //     if (this.id == postsData[i].id) {
  //       return {
  //         index: i,
  //         data: postsData[i]
  //       }
  //     }
  //   }
  // }

  // updatePostData(category) {
  //   var itemData = this.getPostItemById(),
  //     postData = itemData.data,
  //     allPostData = this.getAllPostData();
  //   switch (category) {
  //     case 'collect':
  //       if (!postData.collectStatus) {
  //         postData.collectNum++;
  //         postData.collectStatus = true;
  //       } else {
  //         postData.collectNum--;
  //         postData.collectStatus = false;
  //       }
  //       break;
  //     case 'up':
  //       if (!postData.upStatus) {
  //         postData.upNum++;
  //         postData.upStatus = true;
  //       } else {
  //         postData.upNum--;
  //         postData.upStatus = false;
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  //   allPostData[itemData.index] = postData;
  //   this.execSetStorageSync(allPostData);
  //   return postData;
  // }

  // collect() {
  //   return this.updatePostData('collect');
  // }

  // up() {
  //   return this.updatePostData('up');
  // }

  // getCommentData() {
  //   var itemData = this.getPostItemById().data;
  //   itemData.comments.sort(this.cmp);
  //   var len = itemData.comments.length;
  //   var util = require("../utils/util.js")
  //   for (var i = 0; i < len; i++) {
  //     itemData.comments[i].create_time = util.getDiffTime(itemData.comments[i].create_time, true);
  //     // 
  //   }
  //   console.log(itemData.comments);
  //   return itemData.comments;
  // }

  // cmp(v1,v2){
  //   return parseFloat(v2.create_time) - parseFloat(v1.create_time);
  // }

};
export {
  DBPost
}