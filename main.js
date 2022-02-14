const downloadResume = () => {
  const hrefTag = document.createElement('a')
  hrefTag.href = './assets/pdfs/ajCV.pdf'
  hrefTag.download = 'ajResume.pdf'

  document.body.appendChild(hrefTag)
  hrefTag.click();
  document.body.removeChild(hrefTag)
}

const button = document.querySelector('#download-resume')
button.addEventListener('click', () => {
  downloadResume()
})