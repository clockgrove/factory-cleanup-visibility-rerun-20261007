export function normalizeTasks(records) {
  if (!Array.isArray(records)) {
    throw new TypeError('Tasks must be an array');
  }

  const tasks = [];
  for (const record of records) {
    if (record === null || typeof record !== 'object' || Array.isArray(record)) {
      throw new TypeError('Each task must be a non-null object');
    }

    const { text, done } = record;
    if (typeof text !== 'string') {
      throw new TypeError('Task text must be a string');
    }

    const normalizedText = text.trim().replace(/\s+/g, ' ');
    if (normalizedText === '') {
      throw new TypeError('Task text must not be empty');
    }
    if (done !== undefined && typeof done !== 'boolean') {
      throw new TypeError('Task completion must be a boolean');
    }

    tasks.push({ text: normalizedText, done: done === undefined ? false : done });
  }
  return tasks;
}
