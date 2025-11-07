import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000',
  timeout: 10000,
})

export async function fetchStates() {
  try {
    const { data } = await api.get('/states')
    return data.states
  } catch {
    const res = await fetch('/mock/states.json')
    const json = await res.json()
    return json.states
  }
}

export async function fetchPrediction(req) {
  try {
    const { data } = await api.post('/predict/whatif', req)
    if (data.error) {
      throw new Error(data.error)
    }
    return { predicted_medals: Number(data.predicted_medals ?? 0) }
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error)
    }
    throw error
  }
}

export async function submitContact(formData) {
  try {
    const { data } = await api.post('/contact', formData)
    return data
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    throw new Error('Failed to submit contact form. Please try again.')
  }
}

