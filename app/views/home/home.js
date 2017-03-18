const frame = require('ui/frame')

exports.pageLoaded = (args) => {
  let page = args.object
}

exports.goNewClassroom = () => {
  let topmost = frame.topmost()
  topmost.navigate('views/new-classroom/new-classroom')
}

exports.goJoinClassroom = () => {
  let topmost = frame.topmost()
  topmost.navigate('views/join-classroom/join-classroom')
}
