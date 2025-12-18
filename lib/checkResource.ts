// Lightweight client utilities for checking existence of resources (images and files).
// Uses Image() for images and fetch HEAD/GET for other resources with a timeout.

export async function checkImageExists(url: string, timeoutMs = 5000): Promise<boolean> {
    if (!url) return false
    return new Promise((resolve) => {
        try {
            const img = new Image()
            let settled = false
            const timer = setTimeout(() => {
                if (!settled) {
                    settled = true
                    // cancel load
                    img.src = ''
                    resolve(false)
                }
            }, timeoutMs)

            img.onload = () => {
                if (!settled) {
                    settled = true
                    clearTimeout(timer)
                    resolve(true)
                }
            }
            img.onerror = () => {
                if (!settled) {
                    settled = true
                    clearTimeout(timer)
                    resolve(false)
                }
            }

            // ensure we request absolute-ish path
            img.src = url
        } catch (e) {
            return resolve(false)
        }
    })
}

export async function checkUrlExists(url: string, timeoutMs = 5000): Promise<boolean> {
    if (!url) return false
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), timeoutMs)

    try {
        // Try HEAD first for a lightweight check
        let res = await fetch(url, { method: 'HEAD', signal: controller.signal })
        clearTimeout(timeout)
        if (res.ok) return true

        // Some servers don't allow HEAD. Try GET as a fallback.
        const controller2 = new AbortController()
        const timeout2 = setTimeout(() => controller2.abort(), timeoutMs)
        res = await fetch(url, { method: 'GET', signal: controller2.signal })
        clearTimeout(timeout2)
        return res.ok
    } catch (e) {
        // network error / aborted / CORS opaque responses may show up here
        return false
    }
}

