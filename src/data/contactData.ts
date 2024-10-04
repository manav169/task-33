interface ContactData {
    type: string;
    method: string;
    title: string;
    number?: string;
    email?: string;
    icon: string;
    link: string;
    buttonText?: string;
  }
  
export const contactData: ContactData[] = [
    {
      type: "contact",
      method: "phone",
      title: "Call",
      number: "012-345-6789",
      icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
      link: "tel:0123456789"
    },
    {
      type: "contact",
      method: "email",
      title: "Email",
      email: "hello@ecomposer.io",
      icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488",
      link: "mailto:hello@ecomposer.io",
      buttonText: "Contact Us"
    },
    {
      type: "contact",
      method: "chat",
      title: "Chat",
      icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522",
      link: "#",
      buttonText: "Chat Now"
    },
    {
      type: "contact",
      method: "support",
      title: "Message",
      email: "support@ecomposer.com",
      icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557",
      link: "mailto:support@ecomposer.com",
      buttonText: "Support Now"
    }
  ];