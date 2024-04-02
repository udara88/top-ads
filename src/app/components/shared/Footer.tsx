import Link from "next/link";
import { footerLinks } from "../../../../constants";


const Footer = () => {
    const moreFromTopAdsLinks = footerLinks.filter((footer)=> footer.name === "more-from").map(item => item.items)
    const helpSupport = footerLinks.filter((footer)=> footer.name === "help-support").map(item => item.items)
    const follow = footerLinks.filter((footer)=> footer.name === "follow").map(item => item.items)
    const about =  footerLinks.filter((footer)=> footer.name === "about").map(item => item.items)

    
  return (
    <>
      <div className="border-t-2 border-t-primary w-full"></div>
      <footer>
        <div className="max-container grid grid-cols-5 gap-2 max-lg:hidden ">
          <div className="flex flex-col"> 
            {" "}
            <span className="text-gray-500 font-semibold">More from TopAds</span>
            {moreFromTopAdsLinks[0].map((link:any)=> (
                <Link href={link.href} key={link.id} className="py-2 text-blue-800 text-sm ">
                {link.label}
              </Link>
            ))}
            
          </div>
          <div className="flex flex-col">
            
            {" "}
            <span className="text-gray-500 font-semibold">Help & Support</span>
            {helpSupport[0].map((link:any)=> (
                <Link href={link.href} key={link.id} className="py-2 text-blue-800 text-sm ">
                {link.label}
              </Link>
            ))}

          </div>
          <div className="flex flex-col">
            
            {" "}
            <span className="text-gray-500 font-semibold">Follow Top Ads</span>
            {follow[0].map((link:any)=> (
                <Link href={link.href} key={link.id} className="py-2 text-blue-800 text-sm ">
                {link.label}
              </Link>
            ))}

          </div>
          <div className="flex flex-col">
            
            {" "}
            <span className="text-gray-500 font-semibold">Abount Top Ads</span>
            {about[0].map((link:any)=> (
                <Link href={link.href} key={link.id} className="py-2 text-blue-800 text-sm ">
                {link.label}
              </Link>
            ))}

          </div>

          
        </div>
        
        <div className="max-container flex justify-center items-center py-4 max-lg:text-xs gap-4 text-sm min-h-[100px]   "  >
       <span> Copyright © Isuru Wickramsinghe</span>
       <h3>TopAds.lk</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
