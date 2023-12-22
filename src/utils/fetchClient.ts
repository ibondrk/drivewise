import { google } from 'googleapis';
// import { authFile } from '';

// const BASE_URL = `https://sheets.googleapis.com`;

// /v4/spreadsheets/${spreadsheetId}
// Повертає усю таблицю

// POST /v4/spreadsheets/{spreadsheetId}/values/{range}:append
// Добавляет значения в электронную таблицу.

const auth = new google.auth.GoogleAuth({
  keyFile: '../.private/drive-wise-6f6c6-ef4e7a8ab21d.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth: auth });
// const authClient = await auth.getClient();

// const projectId = await auth.getProjectId();

console.log('auth: ', auth);

// function wait(delay: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

async function request<T>(url: string, method = 'GET'): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      // auth: auth,
    },
  };

  return fetch(url, options).then(async (response) => {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorText}`);
    }

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url, 'GET'),
  post: <T>(url: string) => request<T>(url, 'POST'),
  put: <T>(url: string) => request<T>(url, 'PUT'),
};
