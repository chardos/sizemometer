export const formatFileHistories = (history) => {
  return Object.keys(history).map(key => {
    const historyItem = history[key];

    return {
      filename: key,
      data: {
        width: 'auto',
        height: 180,
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