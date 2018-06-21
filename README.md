# Front-end Test Sympla

## Getting Started

This file contains all the instructions for running the project in your machine.

### Installing

First, you need to start the server in Node.js inside the miniAPI folder, for make this execute the commands as below:

```
npm install

npm start
```

After, you will see the following message in the terminal "Servidor express rodando na porta 3200"

Then, start the client in AngularJS,  for make this execute the following commands in project folder: 

```
npm install 

gulp
```

## Running the optimization tasks

For run the project optimization tasks run

```
gulp build
```

Set the baseDir to dist
```
gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'app'  --> dist
		}
		});
	});
```

run "gulp" command again

## Authors

* **Bruno Meireles**


