# NPM Scripts Example

Firstly, you should go and read [how to use NPM as a build tool][post]. Then
come back here and explore the repository. It's fairly standard, and the bare
minimum to show you what a complex config would look like.

## Contributing

See some areas for optimising? Great! Send a PR, I'm definitely interested in
seeing some great ways to optimise this.

## Notes

Several scripts use the (as of writing this README undocumented) `npm` `-s` flag to silence `npm`'s output from the subtasks, which makes the log output a little tidier (it is a shortcut for --loglevel=silent).

[post]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool
