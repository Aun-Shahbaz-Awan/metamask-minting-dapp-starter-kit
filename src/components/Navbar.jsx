import React from "react";
import logo from "./../logo.svg";

function Navbar({ wallet, connectWallet, disconnectWallet }) {
  return (
    <div className="flex justify-between items-center bg-primary_card px-4 py-2 m-3 rounded-xl">
      <div className="w-1/3">
        <img
          src={logo}
          width="70rem"
          alt="logo"
          className="animate-spin-slow"
        />
      </div>
      <div className="w-1/3 flex justify-center">
        <ul>
          <li className="inline mr-4 cursor-pointer hover:text-secondary">
            Mint NFT
          </li>
          <li className="inline mr-4 cursor-pointer hover:text-secondary">
            Update Metadata
          </li>
          <li className="inline cursor-pointer hover:text-secondary">Utils</li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end">
        {typeof window.ethereum !== "undefined" ? (
          wallet?.address ? (
            <button
              onClick={disconnectWallet}
              className="bg-back border-l-4 border-b-2 border-bord px-12 py-2 mr-3 rounded-xl font-semibold"
            >
              {wallet?.address?.slice(0, 5)}...{wallet?.address?.slice(-4)}
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-back border-l-4 border-b-2 border-bord px-12 py-2 mr-3 rounded-xl"
            >
              Connect
            </button>
          )
        ) : (
          <a
            target="_blank"
            href="https://metamask.io/download/"
            className="bg-back border-l-4 border-b-2 border-bord px-8 py-2 mr-3 rounded-xl"
            rel="noreferrer"
          >
            Install Metamask
          </a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
