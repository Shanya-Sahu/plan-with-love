import Card from './Card';
function Tours({tours , removeTour}){
    
    return(
<div className="w-[100%] min-h-[100vh] flex justify-center items-center flex-col box-border">
<div className='bg-white sticky top-0 block w-full'> <h1 className="text-4xl text-center font-bold my-4">Plan With Love</h1> </div>
<div className="cards flex justify-center flex-wrap max-w-[1300px] mx-5 lg:mxauto">
    {
       tours.map( (tour)=>{
           return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
       })
    }

    
        
    
</div>
</div>
    );
}

export default Tours;