chrome.contextMenus.onClicked.addListener(function(info) {
  // retrieve 311175 from https://openclipart.org/image/400px/311175
  const imageId = info.srcUrl.split('/').pop()
  const svgUrl = "https://openclipart.org/download/" + imageId
  chrome.downloads.download({url: svgUrl, saveAs: true }, downloadId => console.log(downloadId))
});

chrome.contextMenus.create({
    id: 'open',
    title: chrome.i18n.getMessage('openContextMenuTitle'),
    contexts: ['link'],
});
