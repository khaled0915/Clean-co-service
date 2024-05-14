import Container from "../components/ui/container";

const Home = () => {
    return (
     <Container> 
        
        <div className="flex my-32 gap-5 ">
            <div className="flex-[1]  flex flex-col justify-between">

                <h1 className="text-7xl font-bold my-5 ">
                     Quality Cleaning 
                     <br /> <span className="text-green-500"> for your Home </span> </h1>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam, exercitationem unde accusamus suscipit, ipsam ad excepturi rem error illum aut. Ratione, a minima sunt ipsum recusandae quasi itaque facilis! </p>

                <div className="divider"> 
                
                 </div>

                <div>
                    <button className="btn btn-primary"> Book a service </button>
                    <button className="btn btn-link"> read more </button>
                </div>


                <div className="avatar-group my-10 -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>

  
</div>

<div>
    <p>  rated 5 out of 5 by our client</p>
  </div>

            </div>

            <div className="flex-[1] h-[600px] rounded-md overflow-hidden">

                <img className="w-full h-full object-cover" src=" https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "  alt="" />

            </div>
            
        </div> </Container>



        

     
    );
};

export default Home;