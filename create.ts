import { Keypair } from "@solana/web3.js"; // Make sure to install this package if you're using Solana
import { retrieveEnvVariable, saveDataToFile, sleep, readJson } from "./src/utils";
import base58 from "bs58";
// Create a 2D array with 200 rows and 5 columns
const createWallets = (): Keypair[][] => {
    let index = 0;
    const wallets: Keypair[][] = [];
    for (let i = 0; i < 2000; i++) {
        const row: Keypair[] = [];
        for (let j = 0; j < 5; j++) {

            index++;
            console.log(index);
            const buyerKp = Keypair.generate()
            saveDataToFile([base58.encode(buyerKp.secretKey)], "data2.json")
            row.push(buyerKp); // Generate a new wallet (Keypair)
            console.log(base58.encode(buyerKp.secretKey));
        }
        wallets.push(row);
    }
    // console.log(base58.encode(wallets[0][3].secretKey));

    return wallets;
};

// Usage
const walletArray = createWallets();
console.log(walletArray);
console.log(base58.encode(walletArray[0][3].secretKey)); // Logs the 2D array of Keypairs

console.log(`Total wallets: ${walletArray.length * walletArray[0].length}`); // Should log 2000