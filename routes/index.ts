export default eventHandler(async (event) => {
  const host = getRequestHost(event)
  if (host === 'localhost:3000') {
    sendProxy(event, 'https://google.com')
  }
  console.log(host);
})
