# Find and destroy running script

## Notes

I wrote this while using Mac OS Sierra, I believe that commands might not work on Windows (it may work on Linux).

Feel free to propose pull requests if you want to contribute to this documentation!

## Instructions

If you happen to get an error concerning a port which is already taken by a running process and that you did not get this error the first time you launched the script, chances are that the script is still running in the background and still using its chosen port...

### Find if the port is still being used

You can show all the network statistics using the command `netstat` in your Terminal:

```
$ netstat -vanp tcp

Active Internet connections (including servers)
Proto Recv-Q Send-Q  Local Address          Foreign Address        (state)     rhiwat shiwat    pid   epid
tcp4       0      0  127.0.0.1.12443        127.0.0.1.64412        ESTABLISHED 405801 146988    335      0
tcp4       0      0  127.0.0.1.54905        *.*                    LISTEN      131072 131072  46725      0
tcp4       0      0  10.0.38.33.49695       54.77.194.154.443      TIME_WAIT   131072 131768  46723      0

(...)
```

You will probably get a very long list and the easiest way to filter this out is to pipe your last command with `grep` + what you are looking for...
Let say the port already used is `54905`, you would run:

```
$ netstat -vanp tcp | grep 54905
tcp4       0      0  127.0.0.1.54905        *.*                    LISTEN      131072 131072  46725      0
```

### Manually `kill` the process

When running `netstat -vanp tcp`, the columns titles are shown.

Spot the `pid` column in the output... In our example the `pid` value for the process using the port `54905` is `46725`...

Just run `kill 46725` and make sure it worked by running `netstat -vanp tcp | grep 54905`.
