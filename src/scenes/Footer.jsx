import SocialMediaIcons from "../components/SocialMediaIcons"; 

const footer =() => {

    return(
        <footer className="h-64 bg-red pt-10">  
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons/>
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow text-center">MATTHEW WALDRON - WALLY </p>
                <p className="font-playfair text-md text-white text-center">©2023 WALDRON. All Rights Reserved</p>
            </div>
        </div>

        </footer>
    )
}

export default footer;