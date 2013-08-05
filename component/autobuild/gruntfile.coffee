module.exports = ->
  # Project configuration
  @initConfig
    pkg: @file.readJSON 'package.json'

    # CoffeeScript compilation
    coffee:
      spec:
        options:
          bare: true
        expand: true
        cwd: 'spec'
        src: ['**.coffee']
        dest: 'spec'
        ext: '.js'

    # Browser version building
    component:
      install:
        options:
          action: 'install'
          
    component_build:
      'basic':
        output: './browser/'
        config: './component.json'
        scripts: true
        styles: false
        plugins: ['coffee']
        configure: (builder) ->
          # Enable Component plugins
          json = require 'component-json'
          builder.use json()

    # Automated recompilation and testing when developing
    watch:
      files: ['spec/*.coffee', 'components/*.coffee']

    # Coding standards
    coffeelint:
      components: ['components/*.coffee']

  # Grunt plugins used for building
  @loadNpmTasks 'grunt-contrib-coffee'
  @loadNpmTasks 'grunt-component'
  @loadNpmTasks 'grunt-component-build'
  @loadNpmTasks 'grunt-combine'
  @loadNpmTasks 'grunt-contrib-uglify'

  # Grunt plugins used for testing
  @loadNpmTasks 'grunt-contrib-watch'
  @loadNpmTasks 'grunt-coffeelint'

  # Our local tasks
  @registerTask 'build', 'Build BasicComponent for the chosen target platform', (target = 'all') =>
    @task.run 'coffee'
    if target is 'all' or target is 'browser'
      @task.run 'component'
      @task.run 'component_build'
      #@task.run 'combine'
      #@task.run 'uglify'

  @registerTask 'test', 'Build BasicComponent and run automated tests', (target = 'all') =>
    @task.run 'coffeelint'
    @task.run 'coffee'
    #if target is 'all' or target is 'nodejs'
    #  @task.run 'cafemocha'
    if target is 'all' or target is 'browser'
      @task.run 'component'
      @task.run 'component_build'
      #@task.run 'combine'
      #@task.run 'mocha_phantomjs'

  @registerTask 'default', ['test']
