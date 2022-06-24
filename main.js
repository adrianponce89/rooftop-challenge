module.exports = (service) => {
  return {
    check: async (blocks, token) => {
      const ordered = blocks.slice(0, 1);
      const unordered = blocks.slice(1);
      const findNextInList = async (currentValue, list) => {
        for (let i = 0; i < list.length; i++) {
          const element = list[i];
          let found = await service.checkBlocks(currentValue, element, token);
          if (found) {
            return element;
          }
        }
      };

      while (unordered.length > 0) {
        const currentLast = ordered[ordered.length - 1];
        const next = await findNextInList(currentLast, unordered, false);
        if (next) {
          ordered.push(next);
          const nextIndex = unordered.indexOf(next);
          unordered.splice(nextIndex, 1);
        }
      }

      return ordered;
    },
  };
};
