/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ReactElement } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import {
//   BookmarkAltIcon,
//   BriefcaseIcon,
//   DesktopComputerIcon,
//   GlobeAltIcon,
//   InformationCircleIcon,
//   NewspaperIcon,
//   OfficeBuildingIcon,
//   ShieldCheckIcon,
//   UserGroupIcon,
// } from "@heroicons/react/outline";

const vegetables = [
  { name: "Leafy Green", href: "#" },
  { name: "Cruciferous", href: "#" },
  { name: "Marrow", href: "#" },
  { name: "Root", href: "#" },
  { name: "Allium", href: "#" },
];

const fruits = [
  { name: "Apples and Pears", href: "#" },
  { name: "Citrus", href: "#" },
  { name: "Stone Fruit", href: "#" },
  { name: "Tropical and Exotic", href: "#" },
  { name: "Berries", href: "#" },
  { name: "Melons", href: "#" },
  { name: "Tomatoes and Avocados", href: "#" },
];

const livestock = [
  { name: "Chicken", href: "#" },
  { name: "Beef", href: "#" },
  { name: "Pork", href: "#" },
  { name: "Turkey", href: "#" },
  { name: "Milk and Products", href: "#" },
  { name: "Eggs", href: "#" },
];

const flowering = [
  { name: "About", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy", href: "#" },
];

const plantsOrchids = [
  { name: "About", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy", href: "#" },
];

const bulkPackeging = [
  { name: "About", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy", href: "#" },
];

const homeLifestyleCooking = [
  { name: "About", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy", href: "#" },
];

const others = [
  { name: "About", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const CategoryTab = (): ReactElement => {
  return (
    <Popover className="z-0 relative">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <div className="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span>All Categories</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2" />
                <div className="bg-gray-50 w-1/2" />
              </div>
              <div className="relative max-w-7xl mx-auto grid grid-cols-1">
                <nav
                  className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-8 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  aria-labelledby="solutions-heading"
                >
                  <h2 id="solutions-heading" className="sr-only">
                    Solutions menu
                  </h2>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Vegetables
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {vegetables.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Fruits
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {fruits.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Livestock
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {livestock.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Flowering
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {flowering.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Plants & Orchids
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {plantsOrchids.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Bulk & Packeging
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {bulkPackeging.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Home & Lifestyle Cooking
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {homeLifestyleCooking.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Others
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {others.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CategoryTab;
