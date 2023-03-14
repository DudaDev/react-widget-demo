export const getImageSrc = ({ bw, theme, idx }) => {
  const cat = theme || "sports";
  const isbw = bw ? "g" : "c";
  return `https://picsum.photos/seed/picsum/600/600`
};

export const themes = ["sports", "nature", "animals", "city", "fashion"];

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toUpperCase() : word.toLowerCase();
    })
    .replace(/\s+/g, "");
}
