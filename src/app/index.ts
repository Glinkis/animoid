function openFile(event: Event, onProgress: (e: ProgressEvent) => void) {
  const input = event.target as HTMLInputElement
  const reader = new FileReader()

  return new Promise<string>((resolve, reject) => {
    reader.onprogress = e => onProgress(e)
    reader.onerror = () => reject(reader.error)
    reader.onload = () => {
      const result = reader.result

      if (!result) {
        reject(new Error(`Could not get result.`))
      }

      resolve(result as string)
    }

    if (!input) {
      throw new Error(`Could not find input.`)
    }

    if (!input.files) {
      throw new Error(`Could not access files.`)
    }

    reader.readAsDataURL(input.files[0])
  })
}
