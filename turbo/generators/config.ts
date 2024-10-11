import { execSync } from "node:child_process";
import type { PlopTypes } from "@turbo/gen";

const prefix = "@dotts/";

const installAndFormat = (dir: string) => async (answers: object) => {
  if ("name" in answers && typeof answers.name === "string") {
    execSync("npx pnpm i", { stdio: "inherit" });

    return "Package scaffolded";
  }
  return "Package not scaffolded";
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("generatePackage", {
    description: "Generate a new package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: `Name of package: ${prefix}`,
      },
    ],
    actions: [
      (answers) => {
        if ("name" in answers && typeof answers.name === "string") {
          if (answers.name.startsWith(prefix)) {
            answers.name = answers.name.replace(prefix, "");
          }
        }
        return "Config sanitized";
      },
      {
        type: "addMany",
        destination: "packages/{{name}}",
        templateFiles: "templates/package",
        base: "templates/package",
        stripExtensions: ["hbs"],
      },
      installAndFormat("packages"),
    ],
  });
}
