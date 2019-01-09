export const formatFileHistories = (history) => {
  return Object.keys(history).map(key => {
    const historyItem = history[key];

    return {
      filename: key,
      data: {
        width: 'auto',
        height: 250,
        bars: historyItem.map((data) => {
          const { size, author, commitHash, commitMessage } = data;
          return {
            value: size,
            tooltip: [
              {label: 'Size', value: size},
              {label: 'Author', value: author},
              {label: 'Commit message', value: commitMessage},
              {label: 'Commit hash', value: commitHash},
            ]
          }
        })
      }
    }
  })
}