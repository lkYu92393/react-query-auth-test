import { storage } from './storage';

interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  email: string;
  name?: string;
}

export async function handleApiResponse(response: any) {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  return await fetch('/auth/me', {
    headers: {
      Authorization: storage.getToken(),
    },
  }).then(handleApiResponse);
}

export async function loginWithEmailAndPassword(data: any): Promise<AuthResponse> {
  return window
    .fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(handleApiResponse);
}

export async function registerWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  return window
    .fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}