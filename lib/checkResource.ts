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

/**
 * Checks if a URL resource exists by attempting a HEAD request.
 * Uses XMLHttpRequest to minimize console noise from expected 404s.
 * @param url The URL to check
 * @param timeoutMs Timeout in milliseconds
 * @returns Promise<boolean> true if resource exists and is accessible
 */
export async function checkUrlExists(url: string, timeoutMs = 5000): Promise<boolean> {
    if (!url) return false

    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest()
        let resolved = false

        const cleanup = () => {
            if (!resolved) {
                resolved = true
                xhr.abort()
            }
        }

        const timer = setTimeout(() => {
            cleanup()
            resolve(false)
        }, timeoutMs)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                clearTimeout(timer)
                if (!resolved) {
                    resolved = true
                    // Check if status is in the success range (200-299)
                    resolve(xhr.status >= 200 && xhr.status < 300)
                }
            }
        }

        xhr.onerror = () => {
            clearTimeout(timer)
            if (!resolved) {
                resolved = true
                resolve(false)
            }
        }

        try {
            xhr.open('HEAD', url, true)
            xhr.send()
        } catch (e) {
            clearTimeout(timer)
            cleanup()
            resolve(false)
        }
    })
}

