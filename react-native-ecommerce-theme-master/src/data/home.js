'use strict'
const homeData = {
    watches: {
        title: 'Watches',
        description: 'best sellers',
        items: [
            {
                id: 1,
                name: 'Tiffany Key Company',
                imageUri: require('.././assets/dummy_icon/1.png'),
                prize: 1000000
            },
            {
                id: 2,
                name: 'H.U. Dove & Company',
                imageUri: require('.././assets/dummy_icon/2.png'),
                prize: 1500000
            },
            {
                id: 3,
                name: 'The FJH Music Company  ',
                imageUri: require('.././assets/dummy_icon/3.png'),
                prize: 2000000
            },
            {
                id: 4,
                name: '3AM Company',
                imageUri: require('.././assets/dummy_icon/4.png'),
                prize: 800000
            },
        ]
    },

    fashions: {
        title: 'Fashion',
        description: 'best sellers',
        items: [
            {
                id: 1,
                name: 'Kelvin Bee Company ',
                imageUri: require('.././assets/dummy_icon/5.png'),
                prize: 1000000
            },
            {
                id: 2,
                name: 'WCJ Company',
                imageUri: require('.././assets/dummy_icon/6.png'),
                prize: 1000000
            },
            {
                id: 3,
                name: 'Power M Technology Company',
                imageUri: require('.././assets/dummy_icon/7.png'),
                prize: 1000000
            },
            {
                id: 4,
                name: 'Brooklynn Company',
                imageUri: require('.././assets/dummy_icon/8.png'),
                prize: 1000000
            },
        ]
    },

    bags: {
        title: 'Bags',
        description: 'best sellers',
        items: [
            {
                id: 1,
                name: 'JIV Sport Company',
                imageUri: require('.././assets/dummy_icon/9.png'),
                prize: 1500000
            },
            {
                id: 2,
                name: 'Consolidated Contractor Company',
                imageUri: require('.././assets/dummy_icon/10.png'),
                prize: 1200000
            }
        ]
    },

    grid_watch: {
        title: 'Watches',
        description: 'Best sale today',
        items: [
            {
                id: 1,
                name: 'Earing',
                imageUri: require('.././assets/dummy_icon/1.png'),
                prize: 80,
                regularPrize: 100.00,
                discountPercent: 20
            },
            {
                id: 2,
                name: 'iPhone 7 Plus 6S Plus 6 Plus Screen Protector',
                imageUri: require('.././assets/dummy_icon/2.png'),
                prize: 7.99,
                regularPrize: 29.99,
                discountPercent: 73
            },
            {
                id: 3,
                name: 'iPhone 7 Plus 6S Plus 6 Plus Screen Protector,',
                imageUri: require('.././assets/dummy_icon/3.png'),
                prize: 30.10,
                regularPrize: 39.99,
                discountPercent: 25
            },
            {
                id: 4,
                name: 'Skip Hop Moby Bath Tear-Free Waterfall Rinser, Blue',
                imageUri: require('.././assets/dummy_icon/4.png'),
                prize: 8.00,
                regularPrize: 10.00,
                discountPercent: 20
            }
        ]
    },

    grid_fashion: {
        title: 'Fashion',
        description: 'Best sale today',
        items: [
            {
                id: 1,
                name: 'Earing',
                imageUri: require('.././assets/dummy_icon/5.png'),
                prize: 80,
                regularPrize: 100.00,
                discountPercent: 20
            },
            {
                id: 2,
                name: 'iPhone 7 Plus 6S Plus 6 Plus Screen Protector',
                imageUri: require('.././assets/dummy_icon/6.png'),
                prize: 7.99,
                regularPrize: 29.99,
                discountPercent: 73
            },
            {
                id: 3,
                name: 'iPhone 7 Plus 6S Plus 6 Plus Screen Protector,',
                imageUri: require('.././assets/dummy_icon/7.png'),
                regularPrize: 39.99,
                discountPercent: 25
            },
            {
                id: 4,
                name: 'Skip Hop Moby Bath Tear-Free Waterfall Rinser, Blue',
                imageUri: require('.././assets/dummy_icon/8.png'),
                prize: 8.00,
                regularPrize: 10.00,
                discountPercent: 20
            }
        ]
    },

    grid_bag: {
        title: 'Bag',
        description: 'Best sale today',
        items: [
            {
                id: 1,
                name: 'Earing',
                imageUri: 'https://c1.staticflickr.com/3/2337/1637193093_f5661532b0_z.jpg?zz=1',
                prize: 80,
                regularPrize: 100.00,
                discountPercent: 20
            },
            {
                id: 2,
                name: 'iPhone 7 Plus 6S Plus 6 Plus Screen Protector',
                imageUri: 'https://c1.staticflickr.com/3/2272/2102183091_fb38bb3822.jpg',
                prize: 7.99,
                regularPrize: 29.99,
                discountPercent: 73
            },
            {
                id: 3,
                name: 'iPhone 7 Plus 6S Plus 6 Plus Screen Protector,',
                imageUri: 'https://c1.staticflickr.com/7/6109/6311668225_673b9e1e3c_z.jpg',
                prize: 30.10,
                regularPrize: 39.99,
                discountPercent: 25
            },
            {
                id: 4,
                name: 'Skip Hop Moby Bath Tear-Free Waterfall Rinser, Blue',
                imageUri: 'https://c2.staticflickr.com/4/3311/3670965640_da4a67be4f_z.jpg?zz=1',
                prize: 8.00,
                regularPrize: 10.00,
                discountPercent: 20
            }
        ]
    },

    three: {
        title: 'Swiper Collection List',
        description: 'Swiper Collection List Example',
        items: [
            {
                id: 1,
                name: 'Fashion',
                bigImageUri: 'https://c1.staticflickr.com/6/5062/5649039693_4ae12562b5_b.jpg',
                smallTopImageUri: 'https://c1.staticflickr.com/8/7014/6712827125_4e1e474737_b.jpg',
                smallBottomImageUri: 'https://c1.staticflickr.com/6/5545/10770069154_b626552554_b.jpg',
                author: 'by Author'
            },
            {
                id: 2,
                name: 'Beautiful Headphones',
                bigImageUri: 'https://c1.staticflickr.com/9/8671/16221299657_146ed4c550_h.jpg',
                smallTopImageUri: 'https://images-na.ssl-images-amazon.com/images/I/71C%2BW%2B-W9nL._SY450_.jpg',
                smallBottomImageUri: 'https://c1.staticflickr.com/1/86/244141130_57570d6c84_b.jpg',
                author: 'by Author'
            },
            {
                id: 2,
                name: 'Beautiful Bags',
                bigImageUri: 'https://c1.staticflickr.com/3/2337/1637193093_f5661532b0_z.jpg?zz=1',
                smallTopImageUri: 'https://c1.staticflickr.com/3/2272/2102183091_fb38bb3822.jpg',
                smallBottomImageUri: 'https://c1.staticflickr.com/7/6109/6311668225_673b9e1e3c_z.jpg',
                author: 'by Author'
            },
            {
                id: 2,
                name: 'Drink',
                bigImageUri: 'https://c1.staticflickr.com/9/8259/15600521877_c92ed8f002_b.jpg',
                smallTopImageUri: 'https://c1.staticflickr.com/8/7378/16383011045_9d58045a93_b.jpg',
                smallBottomImageUri: 'https://c1.staticflickr.com/3/2750/4508140656_bd9e666d23_b.jpg',
                author: 'by Author'
            },
        ]
    },

    four: {
        title: 'Swiper Collection List',
        description: 'Swiper Collection List Example',
        items: [
            {
                id: 1,
                name: 'Fashion',
                img1: 'https://c1.staticflickr.com/6/5062/5649039693_4ae12562b5_b.jpg',
                img2: 'https://c1.staticflickr.com/8/7014/6712827125_4e1e474737_b.jpg',
                img3: 'https://c1.staticflickr.com/6/5545/10770069154_b626552554_b.jpg',
                img4: 'https://c1.staticflickr.com/9/8142/6974554082_5b5a7ef762_z.jpg',
                author: 'by Author'
            },
            {
                id: 2,
                name: 'Beautiful Headphones',
                img1: 'https://c1.staticflickr.com/9/8671/16221299657_146ed4c550_h.jpg',
                img2: 'https://images-na.ssl-images-amazon.com/images/I/71C%2BW%2B-W9nL._SY450_.jpg',
                img3: 'https://c1.staticflickr.com/1/86/244141130_57570d6c84_b.jpg',
                img4: 'https://c1.staticflickr.com/8/7292/16236123389_cac6c52be0_k.jpg',
                author: 'by Author'
            },
            {
                id: 2,
                name: 'Beautiful Bags',
                img1: 'https://c1.staticflickr.com/3/2337/1637193093_f5661532b0_z.jpg?zz=1',
                img2: 'https://c1.staticflickr.com/3/2272/2102183091_fb38bb3822.jpg',
                img3: 'https://c1.staticflickr.com/7/6109/6311668225_673b9e1e3c_z.jpg',
                img4: 'https://c2.staticflickr.com/4/3311/3670965640_da4a67be4f_z.jpg?zz=1',
                author: 'by Author'
            },
            {
                id: 2,
                name: 'Drink',
                img1: 'https://c1.staticflickr.com/9/8259/15600521877_c92ed8f002_b.jpg',
                img2: 'https://c1.staticflickr.com/8/7378/16383011045_9d58045a93_b.jpg',
                img3: 'https://c1.staticflickr.com/3/2750/4508140656_bd9e666d23_b.jpg',
                img4: 'https://c1.staticflickr.com/6/5674/21871273659_b43c493ad7_k.jpg',
                author: 'by Author'
            },
        ]
    }
}

export default homeData
