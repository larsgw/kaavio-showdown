const regex = /\[((?:\[[^\]]*|[^\[\]])*)\]!![ \t]*highlightOn ([a-zA-Z0-9_,]+?(?:\(.*?\).*?)?) '([a-zA-Z0-9#]+?(?:\(.*?\).*?)?)'[ \t]*?!!/gu;

export const highlightOn = {
  // [some text]!!highlightOn node1,node2,node3,... 'color'!!
  type: 'lang',
  filter: (text) =>
    text.replace(regex,
      (match, innerText, nodeString, color) => {
        const nodesSplit = nodeString.split(/\s*,\s*/);
        let nodes;
        if (nodesSplit.length < 2) {
          nodes = `'${nodesSplit}'`;
        } else {
          nodes = '[';
          nodesSplit.forEach((node, index, array) => {
            nodes += `'${node}'`;
            // Add comma separator if not last index
            if (index !== array.length - 1) nodes += ',';
          });
          nodes += ']';
        }
        return (
          `<a onclick="diagram.manipulator.highlightOn(${nodes},'${color}')">${innerText}</a>`
        );
      }),
};
