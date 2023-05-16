const azneLibrary = (name) => {
  const nameText = name || '名無し'
  return console.log('こんにちは！' + nameText + 'さん！')
}

module.exports = azneLibrary