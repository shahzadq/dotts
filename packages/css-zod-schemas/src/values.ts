import { z } from "zod";
import { isDefined } from "@dotts/utils/typeguards";

type Ratio = `${number}/${number}`;

const isNumber = (tbd: string) => !Number.isNaN(Number.parseInt(tbd));

export const cssRatioValue = z.union([
  z.string().refine(
    (arg): arg is Ratio => {
      const split = arg.split("/");
      if (split.length !== 2) return false;
      const [num1, num2] = split;
      return (
        isDefined(num1) && isDefined(num2) && isNumber(num1) && isNumber(num2)
      );
    },
    { message: "Invalid ratio. Ratio should match `${number}/${number}`" },
  ),
  z.number(),
]);
