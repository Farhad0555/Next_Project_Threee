import AppDetailpage from "@/Component/AppDetailpage/AppDetailpage";
import Homepage from "@/Component/Homepage/Homepage";


const Allapppage = async() => {
    const responsePromise = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const apps = await responsePromise.json();
    return (
        <div>
            
            <h1 className="text-center text-5xl font-bold">All app page : {apps.length}</h1>
            
            <AppDetailpage apps={apps}></AppDetailpage>

        </div>
    );
};

export default Allapppage;