export const formatFileHistories = (history) => {
  return Object.keys(history).map(key => {
    const historyItem = history[key];

    return {
      filename: key,
      data: {
        bars: historyItem.map((data) => {
          const { size, author, commitHash, commitMessage, timestamp } = data;
          return {
            value: size,
            tooltip: data
          }
        })
      }
    }
  })
}