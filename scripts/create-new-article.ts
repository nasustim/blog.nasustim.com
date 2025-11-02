import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { dedent } from "ts-dedent";

const BOILERPLATE_FILE_PATH = resolve(process.cwd(), "src/boilerplate.md");
const ARTICLE_FILE_DIR = resolve(process.cwd(), "./src/content/blog/");

const RETURN_CHAR = "\n";

async function main() {
  const boilerplate = await readFile(BOILERPLATE_FILE_PATH, {
    encoding: "utf8",
  });
  const currentDatetime = new Date().toISOString();

  const content = boilerplate
    .split(RETURN_CHAR)
    .map((line) => {
      return line.replace(/^date:/, `date: ${currentDatetime}`); // assign current dt string to `date`
    })
    .join(RETURN_CHAR);

  const filename = resolve(ARTICLE_FILE_DIR, `${currentDatetime}.md`);
  await writeFile(filename, content);
  console.log(dedent`
    ✨Your new article is here✨
    ${filename}

    Write everything 💪💪💪
  `);
}

main();
