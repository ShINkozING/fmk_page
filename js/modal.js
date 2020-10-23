Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createModalFooter(buttons = []) {
    if(buttons.length === 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach( btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}

function _createModal(options) {
    const default_width = '600px'
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width || default_width}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'Окно'}</span>
                ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
            </div>
            <div class="modal-body" data-content>
                ${options.content || ''}
            </div>
        </div>
    </div>
    `)

    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options) {
    const animation_speed = 250
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false
    let beforeClosing = true

    const modal = {
        open() {
            if(destroyed) {
                return console.log('modal destroyed');
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            if(beforeClosing) {
                closing = true
                $modal.classList.remove('open')
                $modal.classList.add('hide')
                setTimeout(() =>{
                    $modal.classList.remove('hide')
                    closing = false
                }, animation_speed)
            }
        },
    }

    const listener = event => {
        if(event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}

const openModal = document.querySelector('#header__modal')

openModal.addEventListener('click', () =>{
    console.log(openModal)
    modal.open()
})