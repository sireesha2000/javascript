const creatorButton = document.querySelector('.creatorButton')
const deleteButton = document.querySelector('.deleteButton')
const changeButton = document.querySelector('.changeButton')
const ul = document.querySelector('.list')
const text = document.querySelector('.inputText')
const color = document.querySelector('.inputColor')
const type = document.querySelector('.itemType')
const info = document.querySelector('.info')

class ListControls {
  constructor() {
    this.itemId = 1
    this.changedItemId = 0
    this.timerId = ''
  }

  addItem() {
    const li = document.createElement('li')

    const onChange = () => {
      if (this.changedItemId !== 0) {
        document.getElementById(this.changedItemId).style.border = ''
      }

      li.style.border = '2px solid blue'
      this.changedItemId = li.id    
    }

    if (color.value !== '' && text.value !== '') {
      li.style.color = color.value
      li.textContent = text.value
      li.style.listStyleType = type.value
      li.id = this.itemId

      li.addEventListener('click', onChange)
      ul.appendChild(li)

      this.itemId++
    } else {
      clearTimeout(this.timerId)

      const getTimerId = setTimeout(() => {
        info.textContent = ''
      }, 1500)

      info.textContent = 'Please, enter the data'
      this.timerId = getTimerId
    }
  }

  deleteItem() {
    const getId = this.changedItemId
    if (getId === 0) {
      clearTimeout(this.timerId)

      const getTimerId = setTimeout(() => {
        info.textContent = ''
      }, 1500)

      info.textContent = 'Please, select element'
      this.timerId = getTimerId
    } else {
      const deletedItem = document.getElementById(getId)
      ul.removeChild(deletedItem)
      this.changedItemId = 0
    }
  }

  changeItem() {
    const getId = this.changedItemId

    if (getId === 0) {
      clearTimeout(this.timerId)

      const getTimerId = setTimeout(() => {
        info.textContent = ''
      }, 1500)

      info.textContent = 'Please, select element'
      this.timerId = getTimerId
    } else {
      const changeItem = document.getElementById(getId)

      if (color.value !== '' && text.value !== '') {
        changeItem.style.color = color.value
        changeItem.textContent = text.value
        changeItem.style.listStyleType = type.value
        changeItem.style.border = ''
        this.changedItemId = 0
      }
    }
  }
}

const list = new ListControls()

creatorButton.addEventListener('click', () => {
  list.addItem()
})

deleteButton.addEventListener('click', () => {
  list.deleteItem()
})

changeButton.addEventListener('click', () => {
  list.changeItem()
})
