import { normalizeTasks } from './normalize.mjs';
import { formatTask } from './format.mjs';

export function renderTasks(records) {
  const tasks = normalizeTasks(records);
  if (tasks.length === 0) {
    return '';
  }
  return tasks.map(formatTask).join('\n') + '\n';
}
