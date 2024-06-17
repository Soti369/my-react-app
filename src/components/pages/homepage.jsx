
import mives from '../assets/mives.jpg'



function HomePage() {
  return (
    <div className='h-72 w-44 mt-16'>

      <div className='flex justify-self ml-9'>
        
          <div className='text-center text-xs font-bold text-white font-mono my-5 hover:bg-gray-700 p-3 rounded-t-xl border-b-2 border-black ease-in-out duration-1000'>Nothing is impossible in this universe even the impossible word take itself I M Possible on it.<br />
            you know what, there is still some people in this universe that they think like a monk.

         
        </div>

        <div className='h-96 flex justify-center'>
          <h1 className='mt-6 rounded-xl text-white text-5xl ml-36 font-extrabold'>
            Welcome <a className='text-gray-500'>To</a> NoteZone
          
          <img src={mives} alt='book123' className='ml-6 mt-24 h-36 w-36 rounded-full flex items-center animate-bounce'></img>
          </h1>
        </div>
      </div>
    </div>


  );
};

export default HomePage;