import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Error } from '../components'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const error = errors.email?.message

  const [{ location }, setState] = useState({
    location: null, // State for location
  })

  const onSubmit = data => {
    setState({ email: data.email, submitted: true, location })
    reset()
  }

  // Function to fetch location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setState(prevState => ({
          ...prevState,
          location: `${latitude}, ${longitude}`, // Set location in state
        }))
      })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  const navigate = useNavigate()

  return (
    <>
      <section className="container p-5 mx-auto mb-40 space-y-10 bg-no-repeat bg-contain bg-bg-footer-squiggle">
        <h2 className="text-3xl font-bold text-center">Create An Account</h2>
        <form
          noValidate
          autoComplete="off"
          className="flex justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center justify-center gap-5 w-[100%] max-w-[29rem] m-auto">
            <div className="flex flex-col w-[90%]">
              <div className="flex justify-between mb-2">
                <label htmlFor="name">Name</label>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {error && <Error message={error} key={error} />}
                </AnimatePresence>
              </div>
              <input
                className=" m-2 p-3 transition-all duration-500 rounded-md bg-cyan-200 focus:outline-none hover:bg-cyan-300 focus:bg-cyan-300"
                type="name"
                id="name"
                placeholder="John Doe"
              />
              <div className="flex justify-between mb-2">
                <label htmlFor="email">Email Address</label>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {error && <Error message={error} key={error} />}
                </AnimatePresence>
              </div>
              <input
                className=" m-2 p-3 transition-all duration-500 rounded-md bg-cyan-200 focus:outline-none hover:bg-cyan-300 focus:bg-cyan-300"
                type="email"
                id="email"
                placeholder="john@gmail.com"
              />
              <div className="flex justify-between mb-2">
                <label htmlFor="password">Password</label>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {error && <Error message={error} key={error} />}
                </AnimatePresence>
              </div>
              <input
                className="m-2 p-3 transition-all duration-500 rounded-md bg-cyan-200 focus:outline-none hover:bg-cyan-300 focus:bg-cyan-300"
                type="password"
                id="email"
                placeholder="password"
              />
              <div className="flex justify-between mb-2">
                <label htmlFor="location">Location</label>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {error && <Error message={error} key={error} />}
                </AnimatePresence>
              </div>
              <div className="flex">
                <input
                  className="m-2 p-3 transition-all duration-500 rounded-md bg-cyan-200 focus:outline-none hover:bg-cyan-300 focus:bg-cyan-300"
                  type="text"
                  id="location"
                  placeholder="Location"
                  value={location || ''}
                  readOnly // Prevent user input
                />
                <button
                  onClick={fetchLocation}
                  className=" m-auto h-fit w-fit p-3 font-bold transition-all duration-500 rounded-md bg-cyan-100 text-midnight hover:bg-cyan-400"
                >
                  Get Location
                </button>
              </div>
            </div>
            <button className=" w-min p-3 font-bold transition-all duration-500 rounded-md bg-cyan-100 text-midnight hover:bg-cyan-400">
              Submit
            </button>
            <button
              onClick={() => {
                navigate('/login')
              }}
              className=" w-min p-3 font-bold transition-all duration-500 rounded-md bg-cyan-100 text-midnight hover:bg-cyan-400"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
