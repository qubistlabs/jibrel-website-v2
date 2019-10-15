const PROTOCOL_RE = /^(http|https):\/\/.*/

module.exports = function urlResolve(initialUrl) {
  const protocolMatch = initialUrl.match(PROTOCOL_RE)
  const protocol = protocolMatch
    ? `${protocolMatch[1]}://`
    : ''

  const noProtocolUrl = initialUrl.slice(protocol.length)

  const hasLeadingSlash = noProtocolUrl.startsWith('/')

  const resolvedUrlParts = noProtocolUrl.split('/').reduce((memo, part) => {
    if (part === '..') {
      return memo.slice(0, -1)
    }

    if (part === '.' || part === '') {
      return memo
    }

    return memo.concat([ part ])
  }, [])

  const resolvedUrlPath = resolvedUrlParts.join('/')

  return `${protocol}${hasLeadingSlash ? '/' : ''}${resolvedUrlPath}`
}
