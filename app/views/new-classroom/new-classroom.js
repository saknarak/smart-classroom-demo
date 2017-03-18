const Observable = require('data/observable').Observable

let pageData = new Observable({
  teacher: '',
  classroom: '',
})

exports.pageLoaded = (args) => {
  let page = args.object
  page.bindingContext = pageData
}

exports.createNewRoom = () => {
  // X-teacher
  // X-classroom
  fetch('http://192.168.8.148:3000/upload', {
    method: "POST",
    headers: {
      'X-teacher': pageData.teacher,
      'X-classroom': pageData.classroom,
    },
  }).then(res => res.json())
    .then((res) => {
      if (!res.status || !res.code) {
        // dialogs
        return
      }
      console.log('code=' + res.code)
      // appSetting to save code
      // navigate with home room
    })
}
