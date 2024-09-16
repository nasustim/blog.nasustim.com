const _fs = require("node:fs/promises");
const _path = require("node:path");

const BOILERPLATE_FILE_PATH = _path.resolve(
	process.cwd(),
	"src/boilerplate.md",
);
const ARTICLE_FILE_DIR = _path.resolve(process.cwd(), "./src/content/");

const RETURN_CHAR = "\n";

async function main() {
	const boilerplate = await _fs.readFile(BOILERPLATE_FILE_PATH, {
		encoding: "utf8",
	});
	const currentDatetime = new Date().toISOString();

	const content = boilerplate
		.split(RETURN_CHAR)
		.map((line) => {
			return line.replace(/^date:/, `date: ${currentDatetime}`); // assign current dt string to `date`
		})
		.join(RETURN_CHAR);

	const filename = _path.resolve(ARTICLE_FILE_DIR, `${currentDatetime}.md`);
	_fs.writeFile(filename, content);
	console.log(
		`✨Your new article is here✨
${filename}

Write everything 💪💪💪
`,
	);
}

main();
