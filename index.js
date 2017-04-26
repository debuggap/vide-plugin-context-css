var context = {
  //font
  "font-size":["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "smaller", "larger"],
  "font-style":["italic", "oblique", "normal"],
  "font-weight":["normal", "bold", "bolder", "lighter"],
  "font-variant": ["small-caps", "normal"],
  "font-family":["serif", "sans-serif", "cursive", "fantasy", "monospace", "-webkit-body", "-webkit-pictograph","Helvetica","Arial"],
  "font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],
  
  // test
  "text-overflow":["clip","ellipsis"],
  "text-align":["left","center","right","justify","start","end"],
  "text-transform":["none","capitalize","uppercase","lowercase","full-width","full-size-kana"],
  "text-decoration":["none","underline","overline","line-through"],
  "text-shadow":[],
  "text-fill-color":[],
  "text-stroke":[],
  "letter-spacing":["-webkit-autostart", "end", "left", "right", "center", "justify", "-webkit-left", "-webkit-right", "-webkit-center"],
  'word-space':[],
  "vertical-align":["baseline", "middle", "sub", "super", "text-top", "text-bottom", "top", "bottom", "-webkit-baseline-middle"],
  "white-space":["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
  "word-break":["break-all","break-word","normal"],
  "word-wrap":["break-word","normal"],
  "direction":["ltr","rtl"],
  "line-height":[],
  
  
  //background
  "background-repeat":["repeat", "repeat-x", "repeat-y", "no-repeat", "space", "round"],
  "background-url":[],
  "background":[],
  "background-clip":["padding-box","border-box","content-box","text"],
  "background-attachment":["fixed","scroll","local"],
  "background-origin":["padding-box","border-box","content-box"],
  "background-position":["center","left","right","top","bottom"],
  
  //layout
  "display":["none","inline","block","list-item","inline-block","table","inline-table","table-caption","table-cell","table-row","table-row-group","table-column","table-column-group","table-header-group","table-footer-group","compact","run-in","ruby","ruby-base","ruby-text","ruby-base-group","ruby-text-group","box","inline-box", "-webkit-box", "-webkit-inline-box", "flex", "inline-flex", "grid", "inline-grid"],
  "float":['left','none','right'],
  "clear":["none","both","left","right"],
  "visibility":["visible","hidden","collapse"],
  "clip":[],
  "overflow":["hidden", "auto", "visible", "overlay", "scroll"],
  
  // flexible box
  "box-orient":["horizontal","vertical"],
  "box-pack":["start","center","end","justify"],
  "box-align":["start","center","end","baseline","stretch"],
  "box-flex":[],
  "box-flex-group":[],
  "box-ordinal-group":[],
  "box-direction":["normal","reverse"],
  "box-lines":["single","multiple"],
  
  //border
  "border-style":["none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"],
  
  //list
  "list-style":[],
  "list-style-type":["none", "inline", "disc", "circle", "square", "decimal", "decimal-leading-zero", "arabic-indic", "binary", "bengali", "cambodian", "khmer", "devanagari", "gujarati", "gurmukhi", "kannada", "lower-hexadecimal", "lao", "malayalam", "mongolian", "myanmar", "octal", "oriya", "persian", "urdu", "telugu", "tibetan", "thai", "upper-hexadecimal", "lower-roman", "upper-roman", "lower-greek", "lower-alpha", "lower-latin", "upper-alpha", "upper-latin", "afar", "ethiopic-halehame-aa-et", "ethiopic-halehame-aa-er", "amharic", "ethiopic-halehame-am-et", "amharic-abegede", "ethiopic-abegede-am-et", "cjk-earthly-branch", "cjk-heavenly-stem", "ethiopic", "ethiopic-halehame-gez", "ethiopic-abegede", "ethiopic-abegede-gez", "hangul-consonant", "hangul", "lower-norwegian", "oromo", "ethiopic-halehame-om-et", "sidama", "ethiopic-halehame-sid-et", "somali", "ethiopic-halehame-so-et", "tigre", "ethiopic-halehame-tig", "tigrinya-er", "ethiopic-halehame-ti-er", "tigrinya-er-abegede", "ethiopic-abegede-ti-er", "tigrinya-et", "ethiopic-halehame-ti-et", "tigrinya-et-abegede", "ethiopic-abegede-ti-et", "upper-greek", "upper-norwegian", "asterisks", "footnotes", "hebrew", "armenian", "lower-armenian", "upper-armenian", "georgian", "cjk-ideographic", "hiragana", "katakana", "hiragana-iroha", "katakana-iroha"],
  "list-style-position":["outside", "inside", "hanging"],
  
  //position
  "position":["absolute", "fixed", "relative", "static"],
  
  //transform
  "transform":["none","matrix(<number>,<number>,<number>,<number>,<number>,<number>)","translate(<length>[, <length>])","translateX(<length>)","translateY(<length>)","rotate(<angle>)","scale(<number>[, <number>])","scaleX(<number>)","scaleY(<number>)","skew(<angle> [, <angle>])","skewX(<angle>)","skewY(<angle>)"],
  "transform-origin":["left","center","right","top","bottom"],
  "transition":[],
  "transition-property":["all","none"],
  "transition-duration":[],
  "transition-timing-function":["linear","ease","ease-in","ease-out","ease-in-out","cubic-bezier(<number>, <number>, <number>, <number>)"],
  "transition-delay":[],
  
  //animation
  "animation":[],
  "animation-name":[],
  "animation-duration":[],
  "animation-timing-function":["linear","ease","ease-in","ease-out","ease-in-out","cubic-bezier(<number>, <number>, <number>, <number>)"],
  "animation-delay":[],
  "animation-iteration-count":["infinite"],
  "animation-direction":["normal","alternate"],
  "animation-play-state":["running","paused"],
  "animation-fill-mode":["none","forwards","backwards","both"],
  
  //user interface
  "outline":[],
  "outline-width":["medium","thin","thick"],
  "outline-style":["none","dotted","dashed","solid","double","groove","ridge","inset","outset"],
  'outline-color':[],
  "outline-offset":[],
  "box-sizing":["content-box","border-box"],
  "zoom":["auto","normal","active","inactive","disabled"],
  "cursor":["none", "copy", "auto", "crosshair", "default", "pointer", "move", "vertical-text", "cell", "context-menu", "alias", "progress", "no-drop", "not-allowed", "-webkit-zoom-in", "-webkit-zoom-out", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "col-resize", "row-resize", "text", "wait", "help", "all-scroll", "-webkit-grab", "-webkit-grabbing"]
}
module.exports = {
  context: context
}
