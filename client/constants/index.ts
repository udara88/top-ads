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
        items:[
            {   id:1,
                name:'Mobile'
               
            },
            {   id:2,
                name:'Mobile Phone Accessories'
               
            },
            {   id:3,
                name:'Computer and Tablets'
               
            },
        ]
    },
    {
        id:2,
        items:[
            {
                id:1,
                name:'Car'
            },
            {
                id:2,
                name:'MotorBikes'
            },
            {
                id:3,
                name:'Vans'
            },
            {
                id:4,
                name:'Busses'
            },
        ]
       
    }
]

export const formFields = [

    {
        subCategoryId:1,
        fields:[
            {
                fieldid:'condition',
                fieldtype:'radio',
                fieldlabel:'Condition',
                fieldplaceholder:"",
                fieldvalue:'used',
                fielddata:[
                    {
                        key:'used',
                        value:'Used'
                    },

                    {
                        key:'new',
                        value:'New'
                    },

                ],
                required:false,
               
            },
           

            {
                fieldid:'brand',
                fieldtype:'select',
                fieldlabel:'Brand',
                fieldplaceholder:"select brand",
                fieldvalue:"",
                fielddata:[
                    {
                        key:'apple',
                        value:'Apple'
                    },

                    {
                        key:'samsung',
                        value:'Samsung'
                    },

                    {
                        key:'oneplus',
                        value:'Oneplus'
                    },

                ],
                required:true
            },

            {
                fieldid:'desc',
                fieldtype:'textarea',
                fieldlabel:'Description',
                fieldplaceholder:"More details",
                fieldvalue:"",
                fielddata:[],
                required:true
            },

            {
                fieldid:'price',
                fieldtype:'textbox',
                fieldlabel:'Price',
                fieldplaceholder:"Enter price",
                fieldvalue:"",
                fielddata:[],
                required:true
                
            },

            {
                fieldid:'negotiable',
                fieldtype:'checkbox',
                fieldlabel:'Negotiable',
                fieldplaceholder:"",
                fieldvalue:"",
                fielddata:[],
                required:false
            },

            {
                fieldid:'images',
                fieldtype:'file',
                fieldlabel:'Image',
                fieldplaceholder:"",
                fieldvalue:"",
                fielddata:[],
                required:true
            },


        ]
    }
]

