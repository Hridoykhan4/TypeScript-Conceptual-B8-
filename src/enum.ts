enum TrainClass {
    Shovon = 200,
    Snigdha = 400,
    AC = 100
}

/* 
TypeScript-এ Enum (Enumeration) হলো একটি বিশেষ ফিচার, যার মাধ্যমে আমরা কিছু নির্দিষ্ট বা অপরিবর্তনীয় মানের (constant values) একটি তালিকা বা গ্রুপ তৈরি করতে পারি। সহজ ভাষায়, এটি এমন একটি তালিকা যেখানে আগে থেকেই কিছু নির্দিষ্ট অপশন নির্ধারণ করা থাকে এবং এর বাইরে অন্য কোনো মান ব্যবহার করা যায় না।
*/

/* 


Enum কেন ব্যবহার করবেন?

• কোড বুঝতে সুবিধা হয়: কোডে status === 1 লেখার চেয়ে status === OrderStatus.Pending লিখলে কোডটি কী কাজ করছে তা সহজে বোঝা যায়।
• ভুল হওয়ার সম্ভাবনা কমে: বানান ভুল (typo) হওয়ার কোনো সুযোগ থাকে না, কারণ কোড এডিটর নিজে থেকেই সঠিক অপশনগুলো সাজেশন হিসেবে দেখায়।
• নির্দিষ্ট অপশন নিয়ন্ত্রণ: যখন কোনো ভেরিয়েবলের মান কেবল কয়েকটি নির্দিষ্ট অপশনের মধ্যেই সীমাবদ্ধ রাখতে হয় (যেমন: ইউজারের ভূমিকা, সপ্তাহের দিন, পেমেন্টের অবস্থা), তখন এটি সবচেয়ে কার্যকর।
*/

/* 
TypeScript-এ মূলত ৩ ধরনের Enum ব্যবহার করা হয়:

১. Numeric Enum (সংখ্যাভিত্তিক)

আপনি যদি কোনো মান নির্ধারণ করে না দেন, তবে TypeScript স্বয়ংক্রিয়ভাবে 0 থেকে শুরু করে এক এক করে সংখ্যা বসিয়ে দেয়।
*/


// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// console.log(Direction.Down); // আউটপুট: 1

// 

enum StatusCode  {
    Success =  200,
    NotFound = 404,
    ServerError = 500
}

// console.log(StatusCode.ServerError);

/*

২. String Enum (টেক্সটভিত্তিক)

এখানে প্রতিটি সদস্যের জন্য আলাদাভাবে একটি টেক্সট বা স্ট্রিং মান লিখে দিতে হয়। কোড ডিবাগিং করার সময় এটি বেশি সুবিধাজনক, কারণ কনসোলে সংখ্যার বদলে স্পষ্ট লেখা দেখা যায়।
*/

// enum UserRole {
//   Admin = "ADMIN",
//   Editor = "EDITOR",
//   Viewer = "VIEWER",
// }

// const currentRole : UserRole = UserRole.Admin
// console.log(currentRole);


/* 
বাস্তব উদাহরণ (ফাংশনে ব্যবহার)
*/

enum OrderStatus {
    Pending = 'PENDING',
    Shipped = 'Shipped',
    Delivered = 'Delivered'
}
function checkOrder (status : OrderStatus) {
    if(status === OrderStatus.Pending) {
        console.log('Mal pending');
    }
    else if (status == OrderStatus.Delivered) {
        console.log('Mal Delivered');
    }
    else {
        console.log('Not known');
    }
}

type OrderStatus2 =  {
    Pending : 'PENDING';
    Shipped : 'Shipped';
    Delivered : 'Delivered';
}

// const orderStatus = (status : OrderStatus2) => {
//         console.log(status);
// }

// orderStatus({Delivered: 'Delivered', Pending: 'PENDING', Shipped: 'Shipped'})


/* 


২. কোনটি কখন ব্যবহার করবেন?


ফিচার	কী কাজ করে?	কখন ব্যবহার করবেন?	উদাহরণ
Interface	একটি অবজেক্টের নকশা (Blueprint) তৈরি করে।	যখন ইউজার, প্রোডাক্ট বা কোনো ডেটার একাধিক তথ্য (নাম, বয়স, আইডি) একসাথে থাকে।	interface User { name: string; age: number; }
Union Type	একটি ভেরিয়েবলের জন্য কয়েকটি নির্দিষ্ট অপশন ঠিক করে দেয়।	যখন সরাসরি স্ট্রিং বা নাম্বার ভ্যালু পাস করতে চান (আধুনিক প্রজেক্টে এটি বেশি জনপ্রিয়)।	type Status = "PENDING" | "Shipped" | "Delivered";
Enum	নির্দিষ্ট অপশনগুলোর একটি নামযুক্ত গ্রুপ তৈরি করে।	যখন কোডে সরাসরি টেক্সট না লিখে OrderStatus.Pending এভাবে লিখতে চান।	enum Status { Pending = "PENDING" }

*/

let a: undefined = undefined;

const find = (id : number) : string | undefined => {
    return id === 1 ? "Rahim" : undefined
}

// console.log(find(10));


type Pet = 'Cat'  | "Dog" | "Owl" | "Eagle" | 'Tiger' | 'Hyena'

const petSound = (p: Pet) : string => {
    switch(p) {
        case 'Cat' : return 'Meow';
        case 'Dog' : return 'Wooowww';
        case 'Owl' : return 'Waoaw';
        default: return p
    }
}

console.log(petSound('Hyena'));