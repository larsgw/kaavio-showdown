export const ManipulationAPIExtensions = () => [
  {
    // [zoomOn node1,node2,node3,...](some text)
    type: 'lang',
    filter: (text) => text.replace(/\[(?:(?:zoomOn) ([\w, ?]+))]\((.+)\)/g, (match, p1, p2) => {
      const nodes = p1.split(/\s*,\s*/);
      let nodesAsString = '[';
      nodes.forEach(node => {
        nodesAsString += `'${node}',`;
      });
      nodesAsString += ']';
      return `<a onclick="pathwayInstance.manipulator.zoomOn(${nodesAsString})">${p2}</a>`;
    }),
  },
];
