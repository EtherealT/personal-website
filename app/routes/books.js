import Ember from 'ember';

let pageName = 'Favorite Books';
let books = [
    {
        title: 'Blink',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/0316010669/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316010669&linkCode=as2&tag=tobex9434-20&linkId=8681a375e00f316847990f72129a70d9"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0316010669&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=0316010669" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: 'How to win friends and influence people',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/0671027034/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0671027034&linkCode=as2&tag=tobex9434-20&linkId=892bcab77a7a819ec3320fb3c7f571d9"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0671027034&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=0671027034" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: '7 habits of highly effective people',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/1451639619/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1451639619&linkCode=as2&tag=tobex9434-20&linkId=4ddb3e17e19d2fefc8c1bb1d22c173bc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1451639619&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=1451639619" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: 'Sapiens: A brief history of humans',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/0062316095/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062316095&linkCode=as2&tag=tobex9434-20&linkId=c803069c11a0428dafc91aace8f1de3c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0062316095&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=0062316095" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: 'Homo Deus: A brief history of tomorrow',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/0062464310/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062464310&linkCode=as2&tag=etherealt-20&linkId=b099b9be6d829f1dc37e11ad7fdd1942"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0062464310&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=etherealt-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=etherealt-20&l=am2&o=1&a=0062464310" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: 'David & Goliath',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/0316204374/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316204374&linkCode=as2&tag=tobex9434-20&linkId=2105e61aa831e10dccac3f0f45be69e6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0316204374&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=0316204374" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: 'Man\'s search for meaning',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/080701429X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=080701429X&linkCode=as2&tag=tobex9434-20&linkId=742b7ad409c83a02c41925b50b084670"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=080701429X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=080701429X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    },

    {
        title: 'Elon Musk',
        url: '<a target="_blank"  href="https://www.amazon.com/gp/product/006230125X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=006230125X&linkCode=as2&tag=tobex9434-20&linkId=3e8f3bcc0a0a6cba318d953c64e7ac8e"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=006230125X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=tobex9434-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=tobex9434-20&l=am2&o=1&a=006230125X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />'
    }
];

export default Ember.Route.extend({
    model(){
        return{
            pageName: pageName,
            books: books
        };
    }
});
