import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Made by Kartikeiya Rai & Riya Rai
            </h2>
            <p className='text-gray-500 my-2'>
                Feel free to connect :D
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="mailto:kartikeiya.rai@mitaoe.ac.in, riya.rai@mitaoe.ac.in" target='_blank' rel='noopener noreferrer'>
                Connect
            </a>

            </Button>
        </div>
        <div class="p-7 flex-1">
            <img src="https://i.pinimg.com/originals/7f/b6/01/7fb60191f817b477baba8fe8c35fc298.jpg" class="mx-auto w-75 h-60" />
        </div>

    </div>
  )
}
