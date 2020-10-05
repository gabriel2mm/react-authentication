import api from './api'

export const signIn = (values) => {
  return api.post('/auth/login', {login : values.username, password: values.password})
}