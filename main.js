const downloadResume = () => {
  const hrefTag = document.createElement('a')
  hrefTag.href = './assets/pdfs/CV_latest.pdf'
  hrefTag.download = 'ajCV.pdf'

  document.body.appendChild(hrefTag)
  hrefTag.click();
  document.body.removeChild(hrefTag)
}

const mobileDownloadButton = document.querySelector('#download-resume-mobile')
mobileDownloadButton.addEventListener('click', () => {
  downloadResume()
})

const webDownloadButton = document.querySelector('#download-resume-web')
webDownloadButton.addEventListener('click', () => {
  downloadResume()
})