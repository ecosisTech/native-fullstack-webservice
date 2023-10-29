export default eventHandler(async (event) => {
  const host = await getRequestHost(event)
  await sendProxy(event, 'http://localhost:3000', {
    // cookieDomainRewrite: 'http://ecosis.tech/'
  })
})
