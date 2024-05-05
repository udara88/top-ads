import Mobile from '../public/assets/icons/mobile-phone.svg'
import Car from '../public/assets/icons/car-category.svg'
export const navlinks = [
    {id:1,href:'/' ,label:'Home'},
    {id:2,href:'/about-us' ,label:'About Us'},
    {id:3,href:'/contact-us' ,label:'Contact Us'},
   
]

export const footerLinks = [
   
    {
        name:"more-from",
        items:[
            {   id:1,
                href:'#selfast',
                label:'Sell fast'
            },
            {   id:2,
                href:'#membership',
                label:'Membership'
            },
            {   id:3,
                href:'#banner',
                label:'Banner Ads'
            },
            {   id:4,
                href:'#promotions',
                label:'Ad Promotions'
            }
        ]
    },
    {
        name:"help-support",
        items:[
            {   id:1,
                href:'#faq',
                label:'FAQ'
            },
            {   id:2,
                href:'#stay-safe',
                label:'Stay Safe'
            },
            {   id:3,
                href:'#contact-us',
                label:'Contact Us'
            },
            
        ]

       
    },
    {
        name:"follow",
        items:[
            {   id:1,
                href:'#blog',
                label:'Blog'
            },
            {   id:2,
                href:'#facebook',
                label:'Facebook'
            },
            {   id:3,
                href:'#twitter',
                label:'Twitter'
            },
            {   id:4,
                href:'#youtube',
                label:'Youtube'
            }
        ]
        
    },
    {
        name:"about",
        items:[
            {   id:1,
                href:'#about-us',
                label:'About Us'
            },
            {   id:2,
                href:'#careers',
                label:'Careers'
            },
            {   id:3,
                href:'#terms',
                label:'Terms and Conditions'
            },
            {   id:4,
                href:'#site',
                label:'Site Map'
            }
        ]
        
    }
]

export const categoryList = [
    {
        id:1,
        name:'Electronics',
        imageUrl:Mobile
    },
    {
        id:2,
        name:'Vehicles',
        imageUrl:Car
    }

]

export const subCategoryList = [
    {
        id:1,
        items:['Mobile Phones','Mobile Phone Accessories','Computer & Tablets']
    },
    {
        id:2,
        items:['Car','MotorBikes','Vans','Busses']
    }
]