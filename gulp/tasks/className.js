import yargs from 'yargs';
import file from 'gulp-file';
import { hideBin } from 'yargs/helpers'
import merge from 'merge-stream'
import insert from 'gulp-insert'

export const className = () => {
	const argv = yargs(hideBin(process.argv)).argv
	const name = argv.name || 'newClass'
	const importStatement = "@import \"_" + name + "\";\n"
	const scssStream = merge(
		file('_' + name + '.scss', '', { src: true })
			.pipe(app.gulp.dest('./src/scss')),

		app.gulp.src('./src/scss/style.scss')
			.pipe(insert.append(importStatement))
			.pipe(app.gulp.dest('./src/scss'))
	);

	console.log("Crated new class and sass file: " + argv.name)

	return merge(scssStream);
}