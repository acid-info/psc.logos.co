import NextNProgress from 'nextjs-progressbar'

export const ProgressBar = () => {
  return (
    <NextNProgress
      color="black"
      height={1}
      options={{
        showSpinner: false,
      }}
    />
  )
}
