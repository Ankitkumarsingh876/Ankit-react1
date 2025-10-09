const Contact = () => {
  return (
    <div>
        <h1 className="p-4 m-4 font-bold text-2xl">Contact Us Page</h1>
       <form>
        <input type="text" className="border border-black p-2 m-2"/>
        <input type="message" className="border border-black p-2 m-2"/>
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
       </form>
        
    </div>
  )
}

export default Contact