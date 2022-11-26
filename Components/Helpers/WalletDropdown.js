import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import walletImg from "../../Assets/wallet.png";

const people = [
  { id: 1, name: "Wallets" },
  { id: 2, name: "Balance History" },
];

function WalletDropdown() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="h-4 w-36 ml-6 mt-7 text-[#56657f] text-sm hover:translate-x-2 duration-500">
        <Image className="inline" src={walletImg} alt="wallet" /> Wallet
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options>
          {people.map((person) => (
            /* Use the `active` state to conditionally style the active option. */
            /* Use the `selected` state to conditionally style the selected option. */
            <Listbox.Option key={person.id} value={person} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`${
                    active
                      ? "bg-[#212936] text-[#56657f] ml-16 "
                      : "bg-[#212936] text-[#56657f] ml-16"
                  }`}
                >
                  {person.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export default WalletDropdown;
