function Summary (gulp) {
  if (this instanceof TaskList === false){
    return new Summary(gulp);
  }

  this.config = null

  this.define = function define (opts) {
    var task = opts.task.bind(this)
    task.displayName = opts.command
    task.description = opts.description

    gulp.task(task)
  }
  this.configure = function configure (config) {
    this.config = config
  }
}

module.exports = Summary
