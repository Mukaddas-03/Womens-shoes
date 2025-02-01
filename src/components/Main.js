
import React, { useState } from "react";
import styled from "styled-components";


const Main = () => {
  const products = [
   
    {
      id: 1,
      name: "London Rag",
      price: 499,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/s/b/7-sh4268-london-rag-blush-original-imags7jguwhuh2hg.jpeg?q=70",
    },
    {
      id: 2,
      name: "London Rag",
      price: 389,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/y/n/k/7-sh4626-london-rag-black-original-imagxwfhghzsryzg.jpeg?q=70",
    },
    {
      id: 3,
      name: "London Rag",
      price: 529,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/q/k/h/5-sh4072-london-rag-red-original-imagmymzgwpbwtzb.jpeg?q=70",
    },
    {
      id: 4,
      name: "London Rag",
      price: 429,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/v/w/s/4-sh3465-london-rag-blue-original-imagpeay3pqgsanq.jpeg?q=70",
    },
    {
      id: 5,
      name: "London Rag",
      price: 399,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/l/p/d/5-sh4290-london-rag-black-original-imags8jcm3tmr5nz.jpeg?q=70",
    },
    {
      id: 6,
      name: "Denill",
      price: 449,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/u/q/u/6-h-hb40-denill-peach-original-imagqg49xhv37xnu.jpeg?q=70",
    },
    {
      id: 7,
      name: "London Rag",
      price: 559,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/k/s/q/4-sh4071-london-rag-lilac-original-imagmynydph2mgcp.jpeg?q=70",
    },
    {
      id: 8,
      name: "London Rag",
      price: 519,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/9/l/e/4-sh4141-london-rag-black-original-imagmyn3dnwpmyhg.jpeg?q=70",
    },
    {
      id: 9,
      name: "London Rag",
      price: 549,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/5/p/i/4-sh4267-london-rag-black-original-imags7jzhhjgxhgh.jpeg?q=70",
    },
    {
      id: 10,
      name: "Bizzaro",
      price: 499,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/p/v/p/3-bz216-3-bizzaro-copper-original-imah4y3zxypyymdz.jpeg?q=70",
    },
    {
      id: 11,
      name: "London Rag",
      price: 529,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgeaBB_gKcCtLlaffAQUdeBeBeIqFNmXEq6TMmSw45juVC3VdS2sjz9pbBV_ptyY35R0&usqp=CAU",
    },
    {
      id: 12,
      name: "Bizzaro",
      price: 459,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/o/x/v/6-bz117-6-bizzaro-silver-original-imah3yqgvchqysx9.jpeg?q=70",
    }, 
    {
      id: 13,
      name: "SHOETOPIA",
      price: 469,
      image: "https://rukminim2.flixcart.com/image/612/612/l1v1uvk0/sandal/j/3/l/3-km-360-36-shoetopia-yellow-original-imagdc6ec7uzth3e.jpeg?q=70",
    },
    {
      id: 14,
      name: "PIYARI",
      price: 479,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/w/m/8-dhamaka-8-piyari-pink-original-imah7zgydrwyxkqt.jpeg?q=70",
    },
    {
      id: 15,
      name: "Bizzaro",
      price: 419,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/8/j/s/3-bz125-3-bizzaro-off-white-original-imah3yqgzkusygsh.jpeg?q=70",
    },
    {
      id: 16,
      name: "Elle",
      price: 489,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/1/o/3/8-el-sab-w-01-41-elle-lavender-original-imagzjh8txcfgwtr.jpeg?q=70",
    },
    {
      id: 17,
      name: "Moonwalk",
      price: 419,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEEKZVyUC8TsxYyMq_v4zOyaWsr1OiB1E8lLw2Nu4IfX73YqkCpoK4mB7i4KLbBha5h4&usqp=CAU",
    },
    {
      id: 18,
      name: "KNOKAP",
      price: 379,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/z/d/4-kpbd6-4-knokap-cream-original-imah8j2mgqfrehaa.jpeg?q=70",
    },
    {
      id: 19,
      name: "Get Glamr",
      price: 499,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/t/l/v/5-lt-rb-9214-52-38-get-glamr-beige-original-imagky73ugghyh8n.jpeg?q=70",
    },
    {
      id: 20,
      name: "London Rag",
      price: 559,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/n/4/5-sh4233-london-rag-red-original-imagvq8x4fbjyzj4.jpeg?q=70",
    },
    {
      id: 21,
      name: "Bata",
      price: 569,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/c/o/a/-original-imah2ursdsqqyz4s.jpeg?q=70",
    },
  ];

  const [cart, setCart] = useState({});

  const updateCart = (id, change) => {
    setCart((prev) => {
      const newCount = (prev[id]?.count || 0) + change;
      if (newCount < 1) return { ...prev, [id]: undefined };
      return { ...prev, [id]: { ...products.find((p) => p.id === id), count: newCount } };
    });
  };

  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + (item?.count || 0) * item?.price,
    0
  );

  return (
    <MainWrapper>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div>
              <button
                onClick={() => updateCart(product.id, -1)}
                disabled={!cart[product.id]?.count}
              >
                -
              </button>
              {cart[product.id]?.count || 0}
              <button onClick={() => updateCart(product.id, 1)}>+</button>
            </div>
          </ProductCard>
        ))}
      </ProductGrid>

      <CartSummary>
        <h3>Cart Summary</h3>
        <ul>
          {Object.values(cart)
            .filter((item) => item)
            .map((item) => (
              <li key={item.id}>
                {item.name} x {item.count}: ${item.count * item.price}
              </li>
            ))}
        </ul>
        <strong>Total: ${totalPrice}</strong>
      </CartSummary>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  text-align : center;
  justify-content : space-between;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  width : 300px;
  height :330px;
  

  img {
    max-width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    color: #777;
    margin-bottom: 15px;
  }

  button {
    padding: 5px 10px;
    background: #007bff;
    color: #fff;
    border: none;
    margin: 0 5px;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

const CartSummary = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
  }

  strong {
    display: block;
    margin-top: 10px;
    font-size: 18px;
  }
`;
