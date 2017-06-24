Bully
=======

This is Rob Drimmie's solution to the Dozr Coding Challenge.

The setup process is identical to the original starter (http://github.com/dozr/starter.git).

To lint (js and php) and run tests, run `composer ci`.

Setup
=====

Required Software:

- php (https://secure.php.net/)
- composer (https://getcomposer.org/)
- VirtualBox (https://www.virtualbox.org/)
- Vagrant (https://www.vagrantup.com/)
- NodeJS (https://nodejs.org)

To Setup:

    > git clone git@github.com:robdrimmie/bully.git
    > cd starter
    > composer up

Protip:

You can update your `/etc/hosts` file to add a name to your service:

```
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1  localhost
255.255.255.255  broadcasthost
::1             localhost


192.168.10.10  starter.dozr.dev
```

Then you can point your browser to http://starter.dozr.dev

You can start the dev server to automatically rebuild the project when files are changed.
```
npm run dev
```

