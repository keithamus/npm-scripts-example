# NPM Scripts Example



Firstly, you should go and read [how to use NPM as a build tool][post]. Then
come back here and explore the repository. It's fairly standard, and the bare
minimum to show you what a complex config would look like.

## Contributing

See some areas for optimising? Great! Send a PR, I'm definitely interested in
seeing some great ways to optimise this.

## Notes

Several scripts use the `npm` `-s` flag to silence `npm`'s output from the subtasks, which makes the log output a little tidier (it is a shortcut for --loglevel=silent, read more on npms documentation for flags: https://docs.npmjs.com/misc/config#default-configs).

[post]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool

## Tips and tricks

Some issues were created in order to discuss or share solutions for additional situations.

These tips and tricks will be documented inside the [`/tips`](tips) folder inside their own `.md` files.