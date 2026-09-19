import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl

export function PdfThumbnail({ url, className = '' }: { url: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    let renderTask: pdfjsLib.RenderTask | null = null

    const loadPdf = async () => {
      let localRenderTask: pdfjsLib.RenderTask | null = null

      try {
        setLoading(true)
        setError(null)
        
        const loadingTask = pdfjsLib.getDocument({ url })
        const pdf = await loadingTask.promise
        if (!isMounted) return
        
        const page = await pdf.getPage(1)
        if (!isMounted) return

        const viewport = page.getViewport({ scale: 1.5 })
        const canvas = canvasRef.current
        if (!canvas) return
        
        const context = canvas.getContext('2d')
        if (!context) return

        canvas.height = viewport.height
        canvas.width = viewport.width

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        }

        localRenderTask = page.render(renderContext)
        renderTask = localRenderTask // expose for cleanup
        await localRenderTask.promise
      } catch (error: any) {
        // Ignore cancellation errors
        if (error?.name === 'RenderingCancelledException') return
        
        console.error('Error rendering PDF:', error)
        if (isMounted) setError(error?.message || 'Error loading PDF')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadPdf()

    return () => {
      isMounted = false
      // Component unmounted (or effect re-running)
      if (renderTask) {
        renderTask.cancel()
      }
    }
  }, [url])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/5">
          <div className="size-6 animate-spin rounded-full border-2 border-ink/20 border-t-ink/60" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500/10 p-2">
          <span className="text-[10px] text-red-500 text-center break-words">{error}</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  )
}
