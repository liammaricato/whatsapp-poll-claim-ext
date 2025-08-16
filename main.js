const conversationEls = document.querySelectorAll('div#pane-side div[aria-colindex="2"]')
let showBubbleContent = false
let claimNextPoll = false

const injectBubbleEl = document.createElement('div')
injectBubbleEl.id = 'claim-ext-bubble'
injectBubbleEl.innerHTML = `
    <img src="https://static.thenounproject.com/png/1103032-200.png" id="claim-ext-bubble-icon">
    <div id="claim-ext-bubble-content">
        <h3>Claim Extension</h3>
        <div id="claim-ext-bubble-content-body">
            <button id="claim-poll-btn">Claim next poll</button>
        </div>
    </div>
`

document.body.appendChild(injectBubbleEl)

const bubbleEl = document.getElementById('claim-ext-bubble')
const bubbleContentEl = document.getElementById('claim-ext-bubble-content')
const claimPollBtn = document.getElementById('claim-poll-btn')

bubbleEl.addEventListener('click', () => {
    if (showBubbleContent) {
        bubbleContentEl.style.display = 'none'
    } else {
        bubbleContentEl.style.display = 'flex'
    }
    showBubbleContent = !showBubbleContent
})

claimPollBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    
    if (!claimNextPoll) {
        console.log('Claim next poll')
        claimNextPoll = true
    } else {
        console.log('Cannot claim next poll')
        claimNextPoll = false
    }

    injectBubbleEl.classList.toggle('active')
})

// Set up MutationObserver to watch for new elements c
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!claimNextPoll) return

        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.querySelector('span[data-icon="multi-select-icon-filled"]')) {
                    setTimeout(() => {
                        node.querySelector('input[type="checkbox"]').click()
                        claimNextPoll = false
                        injectBubbleEl.classList.toggle('active')
                    }, 100)
                }
            }
        })
    })
})

// Start observing the document for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
})