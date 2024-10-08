export const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]

 export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White' },
        { value: 'beige', label: 'Beige' },
        { value: 'blue', label: 'Blue' },
        { value: 'brown', label: 'Brown' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: false },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S'},
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
        { value: 'XL', label: 'XL', checked: false },
        { value: 'XXL', label: 'XXL', checked: false },
        { value: 'XXXL', label: 'XXXL', checked: false },
      ],
    },
  ]

  export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '159-399', label: '159-399'},
            { value: '400-999', label: '400-999'},
            { value: '1000-1999', label: '1000-1999'},
            { value: '2000-2999', label: '2000-2999'},
            { value: '3000-4999', label: '3000-4999'},
        ],
    },

    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '10', label: '10% and Above'},
            { value: '20', label: '20% and Above'},
            { value: '30', label: '30% and Above'},
            { value: '40', label: '40% and Above'},
            { value: '50', label: '50% and Above'},
            { value: '60', label: '60% and Above'},
            { value: '70', label: '70% and Above'},
            { value: '80', label: '80% and Above'},
        ],
    },
  ]