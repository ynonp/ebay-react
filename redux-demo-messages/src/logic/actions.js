export function rename(name) {
  return {
    type: 'RENAME',
    payload: name,
  }
}