{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      },
      decisionsMade: [decisionId, decisionId],
    }
  },
  remainingDecisions: [decisionId, decisionId],
  decisions: {
    lastUpdated: 0,
    isFetching: true,
    error: '',
    decisions: {
      [decisionId]: {
        author,
        timestamp,
        firstOption
          text
          selectedCount
        secondOption
          text
          selectedCount
      }
    }
  },
  listeners: {
    [listenersId]: true
  },
}
