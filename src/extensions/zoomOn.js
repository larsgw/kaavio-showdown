const regex = /\[((?:\[[^\]]*|[^\[\]])*)\]!![ \t]*zoomOn ([a-zA-Z0-9_,]+?(?:\(.*?\).*?)?)[ \t]*?!!/gu;

export const zoomOn = {
  // [some text]!!zoomOn node1,node2,node3,...!!
  type: 'lang',
  filter: (text, converter, options) =>
    text.replace(regex,
      (match, innerText, nodeString) => {
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
          `<a onclick="diagram.manipulator.zoomOn(${nodes})">${innerText}</a>`
        );
      }),
};
