# turkycat.com

this is the full source code for the website turkycat.com

## prereqs

install node and npm

## setup

```
git clone https://github.com/turkycat/node-conway.git
cd node-conway
npm i
```

## running the server (dev)

this project is configured (via `package.json`) to use nodemon and webpack to monitor for file changes and restart the server / repack as necessary. this means we can start the node and webpack monitors once with the configured commands to make development easy.

in two seperate terminals:

```
npm run dev-server
```

```
npm run dev-bundle
```

## accessing the server

point your web browser at:
`localhost:3000`