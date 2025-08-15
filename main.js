let conversationEls = document.querySelectorAll('div#pane-side div[aria-colindex="2"]')

const extBubbleEl = document.createElement('div')
extBubbleEl.id = 'claim-ext-bubble'
const extBubbleContentEl = document.createElement('div')
extBubbleContentEl.id = 'claim-ext-bubble-content'
extBubbleContentEl.style.display = 'none'
extBubbleContentEl.innerHTML = `
    <h3>Claim Extension</h3>
`
extBubbleEl.appendChild(extBubbleContentEl)
extBubbleEl.addEventListener('click', () => {
    extBubbleContentEl.style.display = 'block'; // toggle
})

const claimPollBtn = document.createElement('button')
claimPollBtn.id = 'claim-poll-btn'
claimPollBtn.innerHTML = 'Claim next poll'
claimPollBtn.addEventListener('click', () => {
    console.log('Claim next poll')
})
extBubbleContentEl.appendChild(claimPollBtn)

document.body.appendChild(extBubbleEl)


// Set up MutationObserver to watch for chat settings popover
// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         mutation.addedNodes.forEach((node) => {
//             // Check if the added node is an element
//             if (node.nodeType === Node.ELEMENT_NODE) {
//                 // if (node.matches('.chat-settings__popover') || node.querySelector('.chat-settings__popover')) {
//                 //     // Small delay to ensure the popover content is fully rendered
//                 //     setTimeout(injectToggle, 100)
//                 // }

//                 // if (node.matches('.reward-center__content__with-bits-rewards') || node.querySelector('.reward-center__content__with-bits-rewards')) {
//                 //     setTimeout(injectPointsData, 100)
//                 // }

//                 // if (node.matches('strong.community-points-summary__points-add-text') || node.querySelector('strong.community-points-summary__points-add-text')) {
//                 //     const points = node.textContent.match(/\d+/)[0]
//                 //     updatePointsData(parseInt(points))
//                 // }

//                 // Adblocker
//                 // 'iframe#amazon-video-ads-in-stream-iframe'
//                 // document.querySelector('button[data-a-target="player-mute-unmute-button"]').click()
//                 // document.querySelector('.picture-by-picture-player video')
//             }
//         })
//     })
// })

// Start observing the document for changes
// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// })