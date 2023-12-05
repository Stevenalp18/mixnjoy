import { useRef } from "react"

const PopupModal = () => {
    const closeX = useRef()
    const modal = useRef()

    return <div ref={modal} className="bg-slate-300 mx-auto w-3/4 lg:w-1/2 top-24 p-6 rounded-xl absolute left-0 right-0">
      <div className="flex justify-end"><span ref={closeX} onClick={() => {
        modal.current.classList.toggle('hidden')
      }} className="text-2xl font-bold text-red-600 hover:text-red-300 active:text-red-800">X</span></div>
      <div>Hello There! Welcome to my Mix n'Joy Application! <br/><br/></div>
      <div>I will be hovering on every application you enter! While under development at least! This application is being created using the MERN stack as a full stack application. <br/> <br/>
      I will give an overview of the application. If you go to Home, it is essentially a welcome page with reference links to other pages on this web app. <br/><br/> The surprise
      drinks tab is live and currently working! I am using the CocktailDB api and am using it to randomly output alcoholic beverages with the ingredients and the description with steps on making the drinks.
      <br/><br/>
      If you check out the What's in my bar? That is currently an experimental feature that I am working on. I am basically creating an interactive bar experience, 
      where instead of selecting a boring button. You will actually click on the alcohol generic type bottle, (e.g. Tequila, Rum, Vodka, etc). This is the primary function of the application.
      It is under development, next I will begin to work on the backend aspect of this application using the favorite drinks tab. I started with the front end and will do the backend next. Hope you enjoy! <br/><br/>
      </div>
      <div className="text-center logo-text text-3xl">Mix n'joy</div>
      <div className="text-center"><a href="https://stevenalp.com" target="_blank" className="hover:text-red-600">Steven Perez (Website)</a> | <a href="https://www.linkedin.com/in/stevenalp18" target="_blank" className="hover:text-red-600">LinkedIn</a> | <a href="https://github.com/stevenalp18" target="_blank" className="hover:text-red-600">Github</a></div>
    </div>
}

export default PopupModal