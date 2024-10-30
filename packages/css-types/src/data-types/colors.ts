export type TransparentColor = "transparent";

export type StandardColor =
  | "black"
  | "silver"
  | "gray"
  | "white"
  | "maroon"
  | "red"
  | "purple"
  | "fuchsia"
  | "green"
  | "lime"
  | "olive"
  | "yellow"
  | "navy"
  | "blue"
  | "teal"
  | "aqua";

export type NamedColor =
  | TransparentColor
  | StandardColor
  | "aliceblue"
  | "antiquewhite"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "blanchedalmond"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkrred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "limegreen"
  | "linen"
  | "magenta"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvoiletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "oldlace"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "rebeccapurple"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "thistle"
  | "tomato"
  | "turquoise"
  | "violet"
  | "wheat"
  | "whitesmoke"
  | "yellowgreen";

export type SystemColor =
  | "AccentColor"
  | "AccentColorText"
  | "ActiveText"
  | "ButtonBorder"
  | "ButtonFace"
  | "ButtonText"
  | "Canvas"
  | "CanvasText"
  | "Field"
  | "FieldText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "LinkText"
  | "Mark"
  | "MarkText"
  | "SelectedItem"
  | "SelectedItemText"
  | "VisitedText";

export type CurrentColor = "currentColor";

// export type Hex = `#${string}`;

// export type AlphaValue =
//   | DataTypes.Numeric.Number
//   | DataTypes.Numeric.Percentage;

// type H =
//   | DataTypes.Quantities.Angle
//   | DataTypes.Numeric.Number
//   | DataTypes.Textual.NoneKeyword;
// type S =
//   | DataTypes.Numeric.Percentage
//   | DataTypes.Numeric.Number
//   | DataTypes.Textual.NoneKeyword;
// type L =
//   | DataTypes.Numeric.Percentage
//   | DataTypes.Numeric.Number
//   | DataTypes.Textual.NoneKeyword;
// type A = AlphaValue | DataTypes.Textual.NoneKeyword;

// type HslSyntaxBase = `${H} ${S} ${L}` | `${H} ${S} ${L} / ${A}`;
// type HslAbsoluteSyntax = `hsl(${HslSyntaxBase})`;
// type HslRelativeSyntax = `hsl(from ${Color} ${HslSyntaxBase})`;
// export type Hsl = HslAbsoluteSyntax | HslRelativeSyntax;

// export type Color = Named | System | CurrentColor | Hex | Hsl;
