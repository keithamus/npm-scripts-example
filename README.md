# NPM Scripts Example

Firstly, you should go and read [how to use NPM as a build tool][post]. Then
come back here and explore the repository. It's fairly standard, and the bare
minimum to show you what a complex config would look like.

# Requirements for Windows users

For these commands to work you need to have 'bash' available. In a Unix"
environment that is likely a moth point. But in Windows you probably have
it if you installed Git for Windows. It is found in /path/to/Git/bin and
you should ensure that this path to Git/bin is added in your PATH variable.
All references to 'bash' will works as intended in Windows if /path/to/Git/bin
is on your PATH.

# Comments in 'package.json'

I added comments in the JSON package (which typically doesn't allow for comments) using
this procedure:

    "comments": "This is an example on how to invoke a command (like 'find') whose name also exist in Windows and",
    "comments": "might be found on the PATH before the one on /path/to/Git/bin.",
    "demo:window:conflict": "bash -c \"`dirname \"$BASH\"`/find node_modules -type d -exec bash -c 'cd {} ; echo *' \\;\"",

However, when the 'package.json' is updated automatically, possibly because you added a dependency
using a command like 'npm install my-stuff --save' then only the last 'comments' will be retained
which means this isn't a practical way of adding permanent comments.

The example above could be modified thus but the comments will eventually end up after the statement:

    "demo:window:conflict": "bash -c \"`dirname \"$BASH\"`/find node_modules -type d -exec bash -c 'cd {} ; echo *' \\;\"",
    "demo:window:conflict:c01": "This is an example on how to invoke a command (like 'find') whose name also exist in Windows and",
    "demo:window:conflict:c02": "might be found on the PATH before the one on /path/to/Git/bin.",

# Possible Unix adjustments

If something like the above 'demo:window:conflict' example is needed you may have to do some
adjustments in Unix.

The code \`dirname \"$BASH\"\`/find is required in Windows because the FIND command also exists
in Windows, and since many corporate users have no control on where the Windows executable
directories will be listed in the PATH variable, it is possible that the wrong FIND command
would be used. This method will invoke the Unix like FIND command found in the same directory as
where BASH is found.

However, on Unix it is possible that BASH and FIND are not located in the same directory. One easy
solution is to create a link, either hard or symbolic, so that FIND is located in the same place
as where BASH is executed from.

Another possible fix would be to create a script called "myfind", but you would have to make it
available in both environments, and all Windows developers would need to create it too. I can
think of ways to facilitate that, but overall I figured a single fix to a Unix machine was easier.

# Standard tasks

I added a 'setup' and 'cleanall' task for practicality.

cleanup: If I am not going to use a project much after I finished developing it, I think
a 'cleanall' is useful to recover the disk space.

setup: The 'setup' is useful to perform all the steps that are required prior to building
the project. Granted that you could put it in a 'prebuild', but I don't want to re-execute
the setup every time I perform a build.

Also, if you use some sort of automated tool to monitor and rebuild your projects (like
jenkins), you won't need to go back to it should you add another requirement. For example,
if initially you did not use 'bower' and later add it to your project, you would normally
have to update that tool's configuration to inform it that in addition to 'npm install"
you now require 'bower install' to run too before doing a build. Using 'setup' you can
configure that tool to execute 'npm run setup' and 'npm run build' and never have to
modify it's configuration again.

Even if something seems messed up and you feel like there should be a 'cleanall' done in that
tool, you can actually get that executed by adding it to your setup, wait until the tool
picked up the update and ran it, and then remove the 'cleanall'. All this without having
to update the tool's configuration.

# Updated script

Since it is very possible that the 'scripts' section lost it's comments after an update,
here it is:

    "scripts": {
    "comments": "For these commands to work you need to have 'bash' available. In a Unix",
    "comments": "environment that is likely a moth point. But in Windows you probably have",
    "comments": "it if you installed Git for Windows. It is found in /path/to/Git/bin and",
    "comments": "you should ensure that this path to Git/bin is added in your PATH variable.",
    "comments": "All references to 'bash' will works as intended in Windows if /path/to/Git/bin",
    "comments": "is on your PATH.",
    "clean": "npm run clean:dist",
    "cleanall": "npm run clean:all",

    "comments": "We need to use rifraf because in Windows we get 'File or path name too long'",
    "comments": "and we don't delete 'node_modules/.bin' until 'rifraf' is done.",
    "clean:all": "bash -c \"rm -rf dist/* bower_components ; rimraf node_modules/* ; rm -rf node_modules npm-debug.log \"",
    "clean:dist": "bash -c 'rimraf dist/*'",

    "comments": "This is an example on how to invoke a command (like 'find') whose name also exist in Windows and",
    "comments": "might be found on the PATH before the one on /path/to/Git/bin.",
    "demo:window:conflict": "bash -c \"`dirname \"$BASH\"`/find node_modules -type d -exec bash -c 'cd {} ; echo *' \\;\"",

    "prebuild": "npm run clean -s",
    "build": "npm run build:scripts -s && npm run build:styles -s && npm run build:markup -s",
    "build:scripts": "browserify -d assets/scripts/main.js -p [minifyify --compressPath . --map main.js.map --output dist/main.js.map] | hashmark -n dist/main.js -s -l 8 -m assets.json 'dist/{name}{hash}{ext}'",
    "build:styles": "stylus assets/styles/main.styl -m -o dist/ && hashmark -s -l 8 -m assets.json dist/main.css 'dist/{name}{hash}{ext}'",
    "build:markup": "jade assets/markup/index.jade --obj assets.json -o dist",

    "test": "karma start --singleRun",

    "watch": "parallelshell \"npm run watch:test -s\" \"npm run watch:build -s\"",
    "watch:test": "karma start",
    "watch:build": "nodemon -q -w assets/ --ext \".\" --exec \"npm run build\"",

    "open:prod": "opener http://example.com",
    "open:stage": "opener http://staging.example.internal",
    "open:dev": "opener http://localhost:9090",

    "deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",
    "deploy:stage": "s3-cli sync ./dist/ s3://example-com/stage-site/",

    "serve": "http-server -p 9090 dist/",
    "live-reload-dep": "^0.2.0 is brooken right now",
    "live-reload": "live-reload --port 9091 dist/",

    "dev": "npm run open:dev -s & parallelshell \"npm run live-reload -s\" \"npm run serve -s\" \"npm run watch -s\"",

    "setup": "npm run setup:npm && npm run setup:bower",
    "setup:npm": "npm install",
    "setup:bower": "echo No need for: bower install",

    "comments": "If this file is updated automatically, only the last 'comments' will be retained",
    "comments": "which means this isn't a practical way of adding permanent comments.",
    "comments": "echo You can have multiple comment entries, but if you \"npm run comments\" only the last one is used."
    }

## Contributing

See some areas for optimising? Great! Send a PR, I'm definitely interested in
seeing some great ways to optimise this.


[post]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool
