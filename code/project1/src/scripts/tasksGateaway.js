const baseUrl = 'https://61d2e19ab4c10c001712b65a.mockapi.io/todolist';

export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};
