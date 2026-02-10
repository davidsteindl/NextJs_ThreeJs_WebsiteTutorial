export const assetPath = (path) => {
  const base =
    process.env.NODE_ENV === 'production'
      ? '/NextJs_ThreeJs_WebsiteTutorial'
      : ''
  return `${base}${path}`
}