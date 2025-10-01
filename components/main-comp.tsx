"use client"

const Main = () => {

  return (
    <div className="flex w-full pt-25 justify-center items-center">
        <div className="flex flex-col max-w-4xl px-6 text-center">
          <div className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-700 mb-1">
            Starter&apos;s Snippet&apos;s
          </div>

          <div className="text-md max-w-lg mb-4 mx-auto font-medium">
            Quickly generate starter files and boilerplate code for projects in multiple programming languages
          </div>

        

          <div className="pt-12 mb-8 shadow-2xl  backdrop-blur-md">
            <video
              src="/extension.mp4"
              autoPlay
              loop
              height={1500}
              width={1500}
              muted
              className="rounded-xl"
            />
          </div>


        <div className='pt-4 mb-3 font-light text-sm text-mute-foreground flex justify-center'>
              <div className='flex justify-center items-center gap-1'>
                <div>Built by</div>
                <div> 
                  <a href="https://github.com/harshdev03" target='_blank'>
                    @harshdev03
                  </a>
                </div>
              </div>
        </div>


        </div>
    </div>
  )
}

export default Main
