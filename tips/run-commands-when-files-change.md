# Run arbitrary commands when files change

## Notes

This tip was written via an [issue by @jab on 24 Jan 2015](https://github.com/keithamus/npm-scripts-example/issues/10).

## Message

Came across your post and thought you might find http://entrproject.org/ (which I also just came across) interesting:

> entr(1)
> Run arbitrary commands when files change
> ...
> Some graphical applications... ship with a --watch option which reloads the document whenever the source file is modified. This is useful, but it is even better for applications to provide a programmatic means of refreshing the display. The browser add-on LiveReload has attempted to solve this problem for web developers by injecting JavaScript that listens on a web socket. The solution does not need to be complex, indeed this is all that is required:
> `$ ls *.css *.html | entr reload-browser Firefox`
> reload-browser is a script bundled with the 3.0 release which uses xdotool or AppleScript to send a refresh keystroke to the active tab in your browser.

related: #6

## PS

I believe the entr tool is not a npm package so it is out of scope of this project...
