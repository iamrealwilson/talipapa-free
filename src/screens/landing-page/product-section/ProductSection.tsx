import { ReactElement } from "react";

// import Grid from "@mui/material/Grid";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    description: "Black1",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "data:image/jpeg;base64,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",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    description: "Black2",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9Tmf_ZpplisTK-1qv04SxGS7D-FgsUvkSA&usqp=CAU",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    description: "Black3",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    description: "Black4",
  },
];

export const ProductSection = (): ReactElement => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center">
            Featured Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="hover:scale-110 ease-in-out duration-200 hover:border-primary border-solid">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      {/* <h3 className="text-sm text-gray-700">
                        <a
                          href={product.href}
                          className="text-primary text-lg font-bold"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3> */}
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center align-middle my-8">
            <button
              type="button"
              className="inline-flex items-center px-10 py-5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Show More Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
